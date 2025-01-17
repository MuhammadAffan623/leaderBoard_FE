import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// import { ScoreData } from './types';

const data: any[] = [
  {
    score: '001',
    username: '@GOKing',
    impressions: 77823,
    posts: 375,
    comments: 375,
    reTweets: 50,
    tgMsgs: 3750,
  },
  {
    score: '002',
    username: '@Creatrix',
    impressions: 68731,
    posts: 230,
    comments: 77,
    reTweets: 3470,
    tgMsgs: 3470,
  },
  {
    score: '003',
    username: '@kyle_chasse',
    impressions: 66003,
    posts: 220,
    comments: 20,
    reTweets: 3420,
    tgMsgs: 3420,
  },
  {
    score: '004',
    username: '@elonmusk',
    impressions: 57098,
    posts: 210,
    comments: 82,
    reTweets: 3330,
    tgMsgs: 3330,
  },
  {
    score: '005',
    username: '@CryptoQueen',
    impressions: 56891,
    posts: 182,
    comments: 33,
    reTweets: 3320,
    tgMsgs: 3320,
  },
  {
    score: '006',
    username: '@Dexter578',
    impressions: 42606,
    posts: 170,
    comments: 58,
    reTweets: 3220,
    tgMsgs: 3220,
  },
  {
    score: '007',
    username: '@J3frogman',
    impressions: 41879,
    posts: 150,
    comments: 9,
    reTweets: 3219,
    tgMsgs: 3219,
  },
  {
    score: '008',
    username: '@SCRPTX_',
    impressions: 38323,
    posts: 100,
    comments: 26,
    reTweets: 3123,
    tgMsgs: 3123,
  },
];

const StyledTableContainer = styled(TableContainer)({
  maxWidth: 800,
  margin: '0 auto',
  background: 'transparent',
  '& .MuiPaper-root': {
    background: 'transparent',
    boxShadow: 'none',
  }
});

const StyledTableCell = styled(TableCell)({
  color: '#fff',
  fontSize: '1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  '&.MuiTableCell-head': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  }
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});


function App() {
  const totals = data.reduce(
    (acc, row) => ({
      impressions: acc.impressions + row.impressions,
      posts: acc.posts + row.posts,
      comments: acc.comments + row.comments,
      reTweets: acc.reTweets + row.reTweets,
      tgMsgs: acc.tgMsgs + row.tgMsgs,
    }),
    { impressions: 0, posts: 0, comments: 0, reTweets: 0, tgMsgs: 0 }
  );

  return (
    <div style={{    backgroundSize: '100vw 100vh'}} className="min-h-screen w-full bg-[url('/table.png')] bg-no-repeat bg-cover bg-center p-4 sm:p-8">
      <div className="mx-auto overflow-hidden">
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={7}
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderBottom: 'none',
                    padding: {
                      xs: '8px',
                      sm: '12px 16px'
                    }
                  }}
                >
                  <div className="text-[#00ffff] font-mono text-base sm:text-lg tracking-[0.2em] font-bold border-b-2 border-[#00ffff] pb-2">
                    OVERALL TOP
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={7}
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.34)',
                    color: '#fff',
                    fontWeight: 700,
                    borderBottom: 'none',
                    padding: {
                      xs: '8px',
                      sm: '12px 16px'
                    }
                  }}
                >
                  <div className="flex items-center justify-between overflow-x-auto">
                    <div className="text-[#fff] font-mono text-xs sm:text-sm tracking-wider whitespace-nowrap">
                      SCORE TABLE
                    </div>
                    <div className="flex gap-2 sm:gap-4 ml-4">
                      {['SCORE#', 'X', 'IMPRESSIONS', 'POSTS', 'COMMENTS', 'RE-TWEETS', 'TG MSGS'].map((header) => (
                        <div
                          key={header}
                          className="text-[#fff] font-mono text-xs sm:text-sm tracking-wider whitespace-nowrap"
                        >
                          {header}
                        </div>
                      ))}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.score}
                  sx={{
                    '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 152, 186, 1)', border: '1px solid rgba(117, 255, 134, 1)' },
                    '&:nth-of-type(even)': { backgroundColor: 'rgba(7, 31, 10, 0)', border: '1px solid rgba(117, 255, 134, 1)' },
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.3)', border: '2px solid rgba(117, 255, 134, 1)' },
                    transition: 'background-color 0.2s'
                  }}
                >
                  <TableCell sx={{ color: '#00ffff' }}>{row.score}</TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <div className="flex items-center gap-2">
                      <Avatar
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.username}`}
                        sx={{
                          width: { xs: 20, sm: 24 },
                          height: { xs: 20, sm: 24 }
                        }}
                      />
                      <span className="text-xs sm:text-base">{row.username}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>
                    <span className="text-xs sm:text-base">{row.impressions.toLocaleString()}</span>
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>
                    <span className="text-xs sm:text-base">{row.posts}</span>
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>
                    <span className="text-xs sm:text-base">{row.comments}</span>
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>
                    <span className="text-xs sm:text-base">{row.reTweets}</span>
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white' }}>
                    <span className="text-xs sm:text-base">{row.tgMsgs}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={{
                  backgroundColor: '#00ffff',
                  '& .MuiTableCell-root': {
                    borderBottom: 'none',
                    color: '#1a1a2e',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                  }
                }}
              >
                <TableCell>
                  <span className="text-xs sm:text-base">TOTAL</span>
                </TableCell>
                <TableCell>
                  <span className="text-xs sm:text-base">{data.length} Users</span>
                </TableCell>
                <TableCell align="right">
                  <span className="text-xs sm:text-base">{totals.impressions.toLocaleString()}</span>
                </TableCell>
                <TableCell align="right">
                  <span className="text-xs sm:text-base">{totals.posts}</span>
                </TableCell>
                <TableCell align="right">
                  <span className="text-xs sm:text-base">{totals.comments}</span>
                </TableCell>
                <TableCell align="right">
                  <span className="text-xs sm:text-base">{totals.reTweets}</span>
                </TableCell>
                <TableCell align="right">
                  <span className="text-xs sm:text-base">{totals.tgMsgs}</span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </StyledTableContainer>
      </div>
    </div>
  );
}

export default App;