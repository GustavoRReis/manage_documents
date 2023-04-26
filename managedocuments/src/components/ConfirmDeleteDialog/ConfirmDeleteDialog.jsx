import { Button } from '@mui/material';
import './ConfirmDeleteDialog.css';

export default function ConfirmDeleteDialog({ handleDelete, handleCancel }) {
  return (
    <div className="box-dialog">
      <div className="dialog">
        <p>Deseja realmente excluir este funcionário?</p>
        <div>
          <Button
            onClick={handleDelete} variant="contained"
            color="error"
          >
            Sim
          </Button>
          <Button onClick={handleCancel} variant="contained">Não</Button>
        </div>
      </div>
    </div>
  );
}
