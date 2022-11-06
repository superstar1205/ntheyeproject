import React, { Fragment, useState } from "react";
import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import { Form } from "react-bootstrap";
import MaskInput from "react-maskinput";
import Pickr from "@simonwep/pickr";
import DatePicker from "react-datepicker";
export function Brand() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
     value:"br",
     label:"Brazil"
    },
    {
     value:"cz",
     label:"Czech Republic"
    },
    {
     value:"de",
     label:"Germany"
    },
    {
     value:"pl",
     label:"Poland"
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
			classNamePrefix="formselect"
			isSearchable
			placeholder="Brazil"
   isMulti
		  />
  );
}
export function Customize() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
      value: "1",
      label: "Operations",
    },
    {
      value: "0",
      label: "Support",
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
			classNamePrefix="formselect"
			isSearchable
			placeholder="Select User Role"
		  />
  );
}
export function Disabled() {
  const [value, setvalue] = useState<any>("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Optioncategory1 = [
    {
      value: "br",
      label: "Brazil",
    },
    {
      value: "cz",
      label: "Czech Republic",
    },
    {
      value: "de",
      label: "Germany",
    },
    {
      value: "pl",
      label: "Poland",
    },
  ];
  return (
    <Select
			onChange={handleOnchange}
			options={Optioncategory1}
			classNamePrefix="formselect"
			isSearchable
			placeholder="Brazil"
      isDisabled
		  />
  
  );
}

export  function DateAndTimePickers() {
  return (
    <Form className="form-control" noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2020-01-16T14:22"
     
      />
    </Form>
  );
}
export function DateMask() {
  const [mask, setMask] = React.useState("00.00.0000");
  const [maskString, setMaskString] = React.useState("DD.MM.YYYY");
  const onChange = (e:any) => {
    if (parseInt(e.target.value[6], 10) > 2) {
      setMaskString("DD.MM.YY");
      setMask("00.00.00");
    } else {
      setMaskString("DD.MM.YYYY");
      setMask("00.00.0000");
    }
  };
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        onChange={onChange}
        maskString={maskString}
        mask={mask}
      />
    </Fragment>
  );
  // DateMask-end
}
// USAformat-start
export function USAformat() {
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        mask={"+1 (000) 000 - 0000"}
        showMask
        maskChar="_"
      />
    </Fragment>
  );
}
// USAformat-end

// Customizationformat-start
export function Customizationformat() {
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        maskChar="_"
        mask="0000-{0}-0000"
        defaultValue="123456789"
      />
    </Fragment>
  );
}
// Customizationformat-end

// Creditcardformat-start
export function Creditcardformat() {
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        maskChar="_"
        mask="0000-0000-0000-0000"
      />
    </Fragment>
  );
}
// Date-picker
export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date:any) => setStartDate(date)}
    />
  );
};

// Date-previous-month
export const Previousmonth = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      showPreviousMonths
      onChange={(date:any) => setStartDate(date)}
      monthsShown={2}
    />
  );
};

// Month-Range
export const Monthrange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date:any) => setStartDate(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
    />
  );
};

// Year-range
export const Yearrange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date:any) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
    />
  );
};
// Nano
export function Nanomethod() {
  const colorPicker = React.useRef<any>();

  React.useEffect(() => {
    if (colorPicker.current) {
      const _pickr = Pickr.create({
        el: ".color-picker",
        theme: "nano",
          default: '#05c3fb',
        swatches: [
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",
          "rgba(255, 235, 59, 0.95)",
          "rgba(255, 193, 7, 1)",
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,

          // Input / output Options
          interaction: {
            hex: true,
            // rgba: true,
            // hsla: true,
            // hsva: true,
            // cmyk: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
       console.log(_pickr);
    }
   
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
// Classic
export function Classicmethod() {
  const colorPicker = React.useRef<any>();

  React.useEffect(() => {
    if (colorPicker.current) {
      const pickr = Pickr.create({
        el: ".color-picker",
        theme: "classic",
         default: '#6c5ffc',
      swatches: [
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.95)",
        "rgba(156, 39, 176, 0.9)",
        "rgba(103, 58, 183, 0.85)",
        "rgba(63, 81, 181, 0.8)",
        "rgba(33, 150, 243, 0.75)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.75)",
        "rgba(76, 175, 80, 0.8)",
        "rgba(139, 195, 74, 0.85)",
        "rgba(205, 220, 57, 0.9)",
        "rgba(255, 235, 59, 0.95)",
        "rgba(255, 193, 7, 1)",
      ],

      components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
          hex: true,
          rgba: true,
          hsva: true,
          input: true,
          clear: true,
          save: true,
        },
      },  

      });
        console.log(pickr);
    }
  
  }, []);

  return (
    
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
// Monolith
export function Monolithmethod() {
  const colorPicker = React.useRef<any>();

  React.useEffect(() => {
    if (colorPicker.current) {
      const pickr = Pickr.create({
        el: ".color-picker",
        theme: "classic", 
          default: '#fc5296',

        swatches: [
          "rgba(55, 35, 9, 0.5)",
          "rgba(44, 67, 54, 1)",
          "rgba(33, 30, 99, 0.95)",
          "rgba(56, 39, 176, 0.9)",
          "rgba(03, 58, 183, 0.85)",
          "rgba(163, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",

          "rgba(255, 193, 7, 1)",
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,

          // Input / output Options
          interaction: {
            // hex: true,
            // rgba: true,
            // hsla: true,
            // hsva: true,
            // cmyk: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
      console.log(pickr);
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}