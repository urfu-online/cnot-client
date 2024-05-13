import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/material'
import axios from 'axios'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useEffect } from 'react'

export default function FormDialog({ id }: { id: number }) {
  const [open, setOpen] = React.useState(false)
  const [dataForm, setDataForm] = React.useState({
    course: 0,
    last_name: '',
    first_name: '',
    second_name: '',
    phone: '',
    SNILS: '',
    specialty: '',
    country: '',
    education_level: '',
    job: '',
    position: '',
    birth_date: '',
  })

  useEffect(() => {
    setDataForm({ ...dataForm, course: id })
  }, [id])

  const sentForm = () => {
    axios
      .post('https://courses.urfu.online/cnot/api/me/learning_request', dataForm, { withCredentials: true })
      .then((resp) => {
        console.log(resp)
      })
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const setFields = (event) => {
    const name = event.target.name
    const value = event.target.value

    setDataForm({ ...dataForm, [name]: value })
    console.log(dataForm)
  }

  return (
    <>
      <Button
        color={'secondary'}
        onClick={handleClickOpen}
        variant={'outlined'}
        size="large"
        endIcon={<ArrowForwardIcon sx={{ fontSize: 10 }} />}
        sx={{
          color: 'white',
          background: '#e17f2e',
          mt: 2,
          border: 2,
          ':hover': {
            border: 2,
            background: '#955c45',
          },
        }}
      >
        Подать заявку
      </Button>
      {open && (
        <Dialog data-id={id} open={open} onClose={handleClose}>
          <DialogTitle>Заявка на обучение</DialogTitle>
          <DialogContent>
            <DialogContentText>Укажите свои данные</DialogContentText>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="Фамилия" type="text" fullWidth name="last_name" onChange={setFields} />
              <TextField label="Имя" type="text" fullWidth name="first_name" onChange={setFields} />
              <TextField label="Отчество" type="text" fullWidth name="second_name" onChange={setFields} />
              <TextField label="Телефон" type="text" fullWidth name="phone" onChange={setFields} />
              <TextField label="Номер СНИЛС" type="text" fullWidth name="SNILS" onChange={setFields} />
              <TextField
                label="Специальность (направление подготовки)"
                type="text"
                fullWidth
                name="specialty"
                onChange={setFields}
              />
              <TextField label="Гражданство" type="text" fullWidth name="country" onChange={setFields} />
              <TextField
                label="Уровень базового образования"
                type="text"
                fullWidth
                name="education_level"
                onChange={setFields}
              />
              <TextField label="Место работы" type="text" fullWidth name="job" onChange={setFields} />
              <TextField label="Должность" type="text" fullWidth name="position" onChange={setFields} />
              <TextField label="Дата рождения" type="text" fullWidth name="birth_date" onChange={setFields} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button onClick={sentForm}>Подать заявку</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}
