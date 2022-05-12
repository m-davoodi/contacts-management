import { Box, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Column, useTable } from 'react-table';
import { Pageable } from 'src/core/domain/rest';
import { UserDto, userEndpoints } from 'src/core/domain/user';
import { filterUsers } from '../utils';
import { TableBodyRows } from './TableBodyRows';

export const columns: Column<UserDto>[] = [
  {
    Header: 'Name',
    accessor: 'first_name',
    Cell: ({
      row: {
        original: { avatar, first_name, last_name },
      },
    }) => {
      const name = `${first_name} ${last_name}`;
      return (
        <Box display="flex" alignItems="center">
          <img src={avatar} alt={`${name} avatar`} width={50} />
          <Box component="span" marginLeft={1}>
            {name}
          </Box>
        </Box>
      );
    },
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
];

type Props = {
  query?: string;
};

export const Table: React.FC<Props> = (props) => {
  const { query } = props;
  const { data } = useQuery<Pageable<UserDto>>(userEndpoints.list());
  const filteredData = filterUsers(data?.data ?? [], query);

  const tableInstance = useTable({
    data: filteredData,
    columns,
  });
  const { getTableBodyProps, getTableProps, headerGroups } = tableInstance;

  return (
    <TableContainer>
      <MuiTable {...getTableProps()}>
        {headerGroups.map((headerGroup, index) => (
          <colgroup key={index}>
            {headerGroup.headers.map((column) => (
              <col key={column.id} width={column.width} />
            ))}
          </colgroup>
        ))}
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell variant="head" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          <TableBodyRows tableInstance={tableInstance} />
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
