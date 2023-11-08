import { useFormik } from "formik";
import * as yup from "yup";

export default function ProfilForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      //yup c'est pour vérifier la validation
      firstName: yup.string().required("le prénom est requis"),
      lastName: yup.string().required("le nom est requis"),
      email: yup
        .string()
        .required("l'email est requis")
        .email("Adresse email non valide"),
      phone: yup
        .string()
        .required("le numéro de télephone est requis")
        .max(10, "trop long"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("formulaire soumis avec succés !");
      console.log("values", values);
      resetForm();
    },
  });
  return (
    <div>
      <div className="div">
        <h1 className="text">Formulaire de contact</h1>
      </div>
      <div className="divBox">
        <form onSubmit={formik.handleSubmit} className="box">
          <div>
            <label>Prénom:</label>
            <input
              type="text"
              name="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="red">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              name="LastName"
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="red">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="red">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label>Phone :</label>
            <input
              type="phone"
              name="phone"
              value={formik.values.subject}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="red">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="button">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
