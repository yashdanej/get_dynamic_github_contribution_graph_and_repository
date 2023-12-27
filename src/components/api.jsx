import axios from "axios";

const TOKEN = "YOUR_GITHUB_API_KEY";

const userQuery = `
query($userName:String!) {
    user(login: $userName){
        contributionsCollection {
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                        date
                    }
                }
            }
        }
    }
}
`;

const repositoryQuery = `
query($owner: String!, $repoName: String!) {
    repository(owner: $owner, name: $repoName) {
        id
        name
        description
        createdAt
        updatedAt
        owner {
            login
            avatarUrl
        }
        stargazerCount
        forkCount
        watchers {
            totalCount
        }
        languages(first: 5) {
            nodes {
                name
            }
        }
    }
}
`;

export function retrieveContributionData(userName, setApiResponse, setRepositoryData, repoName) {
    const userVariables = {
        userName: userName
    };

    const userBody = {
        query: userQuery,
        variables: userVariables
    };

    try {
        axios.post('https://api.github.com/graphql', userBody, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }).then(res => {
            console.log('User data:', res.data);
            setApiResponse(res.data.data.user);
            setRepositoryData(null);
          if(repoName){
            const repositoryVariables = {
                owner: userName,
                repoName: repoName
            };

            const repositoryBody = {
                query: repositoryQuery,
                variables: repositoryVariables
            };

            axios.post('https://api.github.com/graphql', repositoryBody, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then(repoRes => {
                console.log('Repository data:', repoRes.data);
                const repositoryInfo = repoRes.data.data.repository;
                const ownerAvatarUrl = repositoryInfo.owner.avatarUrl;
                console.log('Owner Avatar URL:', ownerAvatarUrl);
                setRepositoryData(repositoryInfo, ownerAvatarUrl)
            });
          }
            return res.data;
        })
    } catch (error) {
        console.error('Error fetching data:', error);
        setApiResponse([]);
        return null;
    }
}
