"use client";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Button, CircularProgress, Skeleton } from "@mui/material";
import WaveformLoader from "@/components/ui/loading/WaveformLoader";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div>
      <Button
        variant='contained'
        color='success'
        onClick={() =>
          enqueueSnackbar("Saved successfully!", { variant: "success" })
        }
      >
        Show Toast
      </Button>
      <Modal isOpen={open} setIsOpen={setOpen}>
        <div>
          <p>This is a modal. You can put any content here.</p>
        </div>
      </Modal>
      <Skeleton width={210} height={18} rounded animation={"wave"} />

      <button onClick={() => setOpen((p) => !p)}>ClickMe</button>
    </div>
  );
}
