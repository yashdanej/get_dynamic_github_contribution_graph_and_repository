import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function Repository({repositoryData}) {
  return (
    <Box
      sx={{
        width: '70%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={repositoryData.owner.avatarUrl}
            srcSet={`${repositoryData.owner.avatarUrl}&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {repositoryData.owner.login} {`(${repositoryData.name})`}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {repositoryData.description}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Watchers
              </Typography>
              <Typography fontWeight="lg">{repositoryData.watchers.totalCount}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
               Fork Count
              </Typography>
              <Typography fontWeight="lg">{repositoryData.forkCount}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Updated At
              </Typography>
              <Typography fontWeight="lg">{repositoryData.updatedAt}</Typography>
            </div>
          </Sheet>
          <Box>
            
            <Button variant="solid" color="primary">
              <a style={{color: 'white', textDecoration: 'none' }} target='_blank' href={`https://github.com/${repositoryData.owner.login}`}>Github Profile</a>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}