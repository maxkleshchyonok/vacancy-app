import { styled } from "@mui/system";
import { EmailModalProps } from "./types/email-modal.type";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const Modal = styled("div")(({ active }: { active: boolean }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 5,
  transform: active ? "scale(1)" : "scale(0)",
}));

const ModalContent = styled("div")`
  padding: 5%;
  border-radius: 10px;
  background-color: white;
  height: 40vh;
  width: 50vw;
`;

const EmailModal = ({ active, setActive }: EmailModalProps) => {
  const handleSubmit = (values: { email: string }) => {
    sessionStorage.setItem("email", values.email);
    setActive(false);
  };
  return (
    <Modal active={active}>
      <ModalContent>
        <Typography>
          To continue with the exploration of job openings, please enter your
          email to apply for the positions you find appealing.
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default EmailModal;
