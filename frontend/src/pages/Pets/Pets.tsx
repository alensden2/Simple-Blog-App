import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  Typography
} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from './Pets.styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const rows = [
  createData('Tom', 'German Shepherd', 6.0, 'Male', '854613'),
  createData('Jerry', 'Bulldog', 9.0, 'Male', '854613'),
  createData('Zeus', 'Labrador Retriever', 16.0, 'Female', '854856'),
  createData('Dooke', 'doberman', 3.7, 'Male', '658526'),
  createData('Brownie', 'poodle', 16.0, 'Female', '789456')
];
function createData(
  name: string,
  type: string,
  age: number,
  gender: string,
  owner: string
) {
  return { name, type, age, gender, owner };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const AllPets: React.FC = () => {
  const classes = useStyles();

  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const handleDeleteAllClick = () => {
    setOpenConfirmation(true);
  };
  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };
  const handleDeleteAllConfirmed = () => {
    setOpenConfirmation(false);
  };

  // for table delete
  const [openConfirmationTable, setOpenConfirmationTable] = React.useState(
    false
  );
  const handleDeleteAllClickTable = () => {
    setOpenConfirmationTable(true);
  };
  const handleConfirmationCloseTable = () => {
    setOpenConfirmationTable(false);
  };
  const handleDeleteAllConfirmedTable = () => {
    setOpenConfirmationTable(false);
  };

  // for table edit
  const [openConfirmationUpdateTable, setOpenConfirmationUpdateTable] = React.useState(
    false
  );
  const handleDeleteAllClickUpdateTable = () => {
    setOpenConfirmationUpdateTable(true);
  };
  const handleConfirmationCloseUpdateTable = () => {
    setOpenConfirmationUpdateTable(false);
  };
  const handleDeleteAllConfirmedUpdateTable = () => {
    setOpenConfirmationUpdateTable(false);
  };

  // for add pet form pop up
  const [openForm, setOpenForm] = React.useState(false);
  const handleAddPetClick = () => {
    setOpenForm(true);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1 style={{ marginLeft: '20px' }}>Pet Console</h1>
        <div style={{ marginRight: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: '10px' }}
            onClick={handleAddPetClick}
          >
            Add Pet
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDeleteAllClick}
          >
            Delete all
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Pet Name
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Type
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Age
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Gender
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Owner ID
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Edit
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontWeight: 'bold' }}>
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.type}</StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell align="center">{row.owner}</StyledTableCell>
                <StyledTableCell align="center" style={{ color: '#1976d2' }}>
                  <IconButton color="primary" onClick={handleDeleteAllClickUpdateTable} aria-label="add to shopping cart">
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: '#f44336' }}>
                  <IconButton
                    color="primary"
                    onClick={handleDeleteAllClickTable}
                    aria-label="add to shopping cart"
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog component */}
      <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
        <DialogTitle
          style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}
        >
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete all pet records?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleConfirmationClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteAllConfirmed}
            color="secondary"
          >
            Delete All
          </Button>
        </DialogActions>
      </Dialog>
      {/* Form component */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>Add Pet</DialogTitle>
        <DialogContent>{/*  form inputs  */}</DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => setOpenForm(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* delete dialouge */}
      <Dialog
        open={openConfirmationTable}
        onClose={handleConfirmationCloseTable}
      >
        <DialogTitle
          style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}
        >
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this record?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleConfirmationCloseTable}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteAllConfirmedTable}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* edit dialouge box */}
      <Dialog
        open={openConfirmationUpdateTable}
        onClose={handleConfirmationCloseUpdateTable}
      >
        <DialogTitle
          style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}
        >
          Update Record
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to update this record?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleConfirmationCloseUpdateTable}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteAllConfirmedUpdateTable}
            color="secondary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllPets;
