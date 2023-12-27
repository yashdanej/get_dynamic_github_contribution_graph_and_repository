# get_dynamic_github_contribution_graph_and_repository
This script fetches a user's GitHub contribution graph, displaying daily commit activity, and provides information about their repositories. Users can run the script to easily access and analyze their GitHub data.

Setup Instructions
- Extract Zip File:
    Download the project zip file and extract it to your desired location.

- Install Dependencies:
    => Open a terminal and navigate to the project directory.
    => Run the following command to install the project dependencies:
    => 'npm install'
    => This will create a node_modules folder with all the necessary packages.

- Configure GitHub API Key:
    => Navigate to src > components > api.jsx.
    => Open the api.jsx file and locate the following line:
    => const TOKEN = "YOUR_GITHUB_API_KEY";
    => Replace "YOUR_GITHUB_API_KEY" with your actual GitHub API key.

- Run the Project:
    => Once the dependencies are installed and the API key is configured, you can start the project by running the following command:
    => 'npm start'
    => This will launch the project, and you can access it in your web browser at http://localhost:3000.
