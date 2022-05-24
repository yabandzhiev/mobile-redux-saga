import { Box, Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useErrorActionsDispatch } from "../../common/hooks/useActions";

const ErrorPopup = ({ error, open }) => {
  const { removeErrorPopup } = useErrorActionsDispatch();

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  removeErrorPopup();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};

export default ErrorPopup;
