import * as React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { TableInstance } from 'react-table';
import { UserDto } from 'src/core/domain/user';
import { EmptyDataPlaceholder } from 'src/shared/placeholders';

type Props = {
  tableInstance: TableInstance<UserDto>;
  onClick: (user: UserDto) => void;
};

export const TableBodyRows: React.FC<Props> = (props) => {
  const {
    tableInstance: { rows, visibleColumns, prepareRow },
    onClick,
  } = props;

  const handleRowClick = (user: UserDto) => {
    onClick(user);
  };

  if (!rows.length) {
    return (
      <tr>
        <td colSpan={visibleColumns.length}>
          <EmptyDataPlaceholder />
        </td>
      </tr>
    );
  }

  return (
    <>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <TableRow
            {...row.getRowProps()}
            hover
            onClick={() => handleRowClick(row.original)}
            sx={{
              cursor: 'pointer',
            }}
          >
            {row.cells.map((cell) => (
              <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
