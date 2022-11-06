
export const LtrtoRtl = () => {
  document.querySelector(".error-page1")?.classList.add("rtl");
  document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
  document.querySelector(".error-page1")?.classList.remove("ltr");

  localStorage.setItem("nowaltr", "true");
  localStorage.removeItem("nowartl");
};
export const RtltoLtr = () => {
  document.querySelector(".error-page1")?.classList.add("ltr");
  document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css")
  document.querySelector(".error-page1")?.classList.remove("rtl");

  localStorage.setItem("nowartl", "true");
  localStorage.removeItem("nowaltr");
};
// Color theme
export const LightTheme = () => {
  document.querySelector(".error-page1")?.classList.add("light-theme");

  document.querySelector(".error-page1")?.classList.remove("transparent-theme");
  document.querySelector(".error-page1")?.classList.remove("dark-theme");
  document.querySelector("body")?.classList.remove("dark-header");
  document.querySelector("body")?.classList.remove("color-header");
  document.querySelector("body")?.classList.remove("gradient-header");
  document.querySelector("body")?.classList.remove("dark-menu");
  document.querySelector("body")?.classList.remove("color-menu");
  document.querySelector("body")?.classList.remove("gradient-menu");

  let html:any = document.querySelector("html")
  html.style = "";
  name();
  localStorage.clear();
};
export const dark = () => {
  document.querySelector(".error-page1")?.classList.add("dark-theme");

  document.querySelector(".error-page1")?.classList.remove("transparent-theme");
  document.querySelector(".error-page1")?.classList.remove("light-theme");
  document.querySelector("body")?.classList.remove("light-header");
  document.querySelector("body")?.classList.remove("color-header");
  document.querySelector("body")?.classList.remove("gradient-header");
  document.querySelector("body")?.classList.remove("light-menu");
  document.querySelector("body")?.classList.remove("color-menu");
  document.querySelector("body")?.classList.remove("gradient-menu");

  let html:any = document.querySelector("html")
  html.style = "";
  name();
  localStorage.clear();
};

export function handleThemeUpdate(cssVars:any) {
  const root:any = document.querySelector(":root");
  const keys:any = Object.keys(cssVars);

  keys.forEach((key:any) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue:any) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st:any, chunkSize:any) =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr:any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a:any, alpha:any) => {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue:any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor:any, color:any) {
  primaryColor.forEach((item:any) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor:any, color:any) {
  primaryColor.forEach((item:any) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTransparentPrimaryColor(primaryColor:any, color:any) {
  primaryColor.forEach((item:any) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTransparentBackground(primaryColor:any, color:any) {
  primaryColor.forEach((item:any) => {
    const cssPropName1 = `--transparent-${item.getAttribute("data-id5")}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTransparentPrimaryColor(primaryColor:any, color:any) {
  primaryColor.forEach((item:any) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

export function resetData() {
  let myonoffswitch1:any = document.querySelector("#myonoffswitch1") as HTMLInputElement
  myonoffswitch1.checked = true;   //lighttheme
 let myonoffswitch54:any = document.querySelector("#myonoffswitch54") as HTMLInputElement
 myonoffswitch54.checked = true;  //Ltr
  
  document.querySelector(".error-page1")?.classList.add("ltr");
  document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
  // document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css")
  document.querySelector(".error-page1")?.classList.remove("rtl");
  name();
}

export function name() {
  let primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-bg-color")
    .trim();

  //get variable
  let myVarVal =
    localStorage.getItem("nowaprimaryColor") ||
    localStorage.getItem("nowadarkPrimaryColor") ||
    localStorage.getItem("nowatransparentPrimaryColor") ||
    localStorage.getItem("nowatransparent-bgImgPrimaryColor") ||
    localStorage.getItem("nowatransparentBgImgPrimary") ||
    primaryColorVal;

  let colorData = hexToRgba(myVarVal || "#38cab3", 0.1);
  document.querySelector("html")?.style.setProperty("--primary01", colorData);

  let colorData1 = hexToRgba(myVarVal || "#38cab3", 0.2);
  document.querySelector("html")?.style.setProperty("--primary02", colorData1);

  let colorData2 = hexToRgba(myVarVal || "#38cab3", 0.3);
  document.querySelector("html")?.style.setProperty("--primary03", colorData2);

  let colorData3 = hexToRgba(myVarVal || "#38cab3", 0.6);
  document.querySelector("html")?.style.setProperty("--primary06", colorData3);

  let colorData4 = hexToRgba(myVarVal || "#38cab3", 0.9);
  document.querySelector("html")?.style.setProperty("--primary09", colorData4);
}
name();

export function localStorageBackUp() {
  let html = document.querySelector("html")?.style;
  let body = document.querySelector("body");
  if (localStorage.getItem("nowaprimaryColor") !== null) {
    body?.classList.add("light-theme");

    let myonoffswitch6:any = document.getElementById("myonoffswitch6") as HTMLInputElement
    myonoffswitch6.checked = true;

    body?.classList.remove("dark-theme");
    
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("nowaprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("nowaprimaryHoverColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("nowaprimaryBorderColor")
    );
  }
  if (localStorage.getItem("nowadarkPrimaryColor") !== null) {
    body?.classList.add("dark-theme");

  let myonoffswitch7:any =  document.getElementById("myonoffswitch7") as HTMLInputElement
  myonoffswitch7.checked = true;

    body?.classList.remove("light-theme");
    

    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("nowadarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("nowadarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("nowadarkPrimaryColor")
    );
  }

 
  if (localStorage.nowartl) {
    document.querySelector("body")?.classList.add("rtl");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.querySelector(".error-page1")?.classList.remove("rtl");
  }
}
export const Swichermainright = () => {
  document.querySelector(".demo_changer")?.classList.toggle("active");
 let demo:any = document.querySelector(".demo_changer")
 demo.style.right = "0px";
};
export const Swichermainrightremove = () => {
  document.querySelector(".demo_changer")?.classList.remove("active");
  let demo:any =document.querySelector(".demo_changer")
  demo.style.right = "-270px";
};


