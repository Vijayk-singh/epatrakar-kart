import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const a ='a';
const columns = [
  { id: {}, label: '', minWidth: 1 },
  { id: 'sno', label: 'S No.', minWidth: 70 },
  { id: 'storyid', label: 'Story ID', minWidth: 100 },
  { id: 'photo', label: 'Photo', minWidth: 110 },
  { id: 'name', label: 'Title', minWidth: 70 },
  { id: 'user', label: 'User', minWidth: 100 },
  {
    id: 'population',
    label: 'Categary',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Provider',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Share',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Action',
    minWidth: 110,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(sno,name,user, code, population, size) {
  const density = population / size;
  return {sno, name,user, code, population, size, density };
}

const rows = [
  createData(1,'India',"jinghu", 'IN', "jinghu"," xiau"),
  createData(2,'China',"jinghu", 'CN', "jinghu"," xiau"),
  createData(2,'Italy',"jinghu", 'IT', "jinghu"," xiau"),
  createData(3,'United States',"jinghu", 'US', "jinghu"," xiau"),
  createData(3,'Canada',"jinghu", 'CA', "jinghu"," xiau"),
  createData(4,'Australia',"jinghu", 'AU', "jinghu"," xiau"),
  createData(4,'Germany',"jinghu", 'DE', "jinghu"," xiau"),
  createData(4,'Ireland',"jinghu", 'IE', "jinghu"," xiau"),
  createData(5,'Mexico',"jinghu", 'MX', "jinghu"," xiau"),
  createData(5,'Japan',"jinghu", 'JP', "jinghu"," xiau"),
  createData(6,'France',"jinghu", 'FR', "jinghu"," xiau"),
  createData(6,'United Kingdom',"jinghu", 'GB', "jinghu"," xiau"),
  createData(7,'Russia',"jinghu", 'RU', "jinghu"," xiau"),
  createData(8,'Nigeria',"jinghu", 'NG', "jinghu"," xiau"),
  createData(10,'Brazil',"jinghu", 'BR', "jinghu"," xiau"),
];

export default function List() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='list'>
    <Paper  sx={{ width: '100%', overflow: 'hidden' , marginTop:'5px' , alignItems:'right'}}>
      <TableContainer sx={{ maxHeight: 1000 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}