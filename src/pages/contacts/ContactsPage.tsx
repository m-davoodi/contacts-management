import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { PageWrapper } from 'src/shared/page';
import { Table } from './table/Table';

export const ContactsPage: React.FC = () => {
  const [query, setQuery] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // mark as low priority update
    React.startTransition(() => {
      setQuery(event.target.value.trim());
    });
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contacts
        </Typography>

        <TextField
          label="Search Contacts"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Table query={query} />
      </Paper>
    </PageWrapper>
  );
};
