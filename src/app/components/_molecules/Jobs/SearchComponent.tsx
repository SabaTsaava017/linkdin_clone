import {
  SearchDiv,
  SearchHeader,
  InputDiv,
  SearchInput,
  SearchBlock,
  FilterIcon,
  SearchButton,
} from "@/app/styles/jobs-styled/styled";
import { useState } from "react";
import Popup from "../Popup";
import { Icon } from "../../_atoms";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const SearchContent = () => {

  const formik = useFormik({
    initialValues: {
      job: '',
    },
    validationSchema: Yup.object().shape({
      job: Yup.string().max(12, 'max 12 characters required'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  const { values, errors, handleChange, handleSubmit, touched } = formik;

  
  const [show, setShow] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
    <SearchDiv>
      <SearchHeader>YOUR DREAM JOB IS HERE</SearchHeader>
      <InputDiv>
        <SearchInput 
        type="text"
        name="firstName"
        placeholder="Whats on"
        value={values.job}
        onChange={handleChange}
        style={{
          border: touched.job && errors.job? '1px solid red' : '4px solid #ccc',
         
        }}
       
      />
      {errors.job && touched.job ? (
        <div style={{ color: 'red' }}>{errors.job}</div>
      ) : null}
      <button type="submit">Submit</button>
        <SearchBlock>
          <FilterIcon onClick={() => setShow(true)}>
            <Icon iconName="filterSvg" width={40} height={40} />
          </FilterIcon>
          {show && <Popup title="Filter Our Jobs..." setShow={setShow} />}
          <SearchButton>
          <Icon iconName="searchIcon" width={40} height={40} />
          </SearchButton>
        </SearchBlock>
      </InputDiv>
    </SearchDiv> 
     </form>
  
  );
};

export default SearchContent;
