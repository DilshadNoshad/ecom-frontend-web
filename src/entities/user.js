export const User = {
  userSessionId:"",
  id:0,
  email:"",
  mobile: "",
  first:"",
  middle:"",
  last:"",
  username:"",
  dob:"",
  gender:"",
  addressList:[]
}
export const Address = {
  addressId:0,
  address1:'',
  address2:'',
  stateCode:'',
  stateName:'',
  cityCode:'',
  cityName:'',
  postCode:'',
  phone:'',
  lng:'',
  lat:'',
  district:'',
  userId:0
}

const optState = [
  { label: "Sindh", value: "SND" },

  { label: "Punjab", value: "PNJ" },

  { label: "Khyber Pakhtunkhua", value: "KP" },

  { label: "Balochistan", value: "BL" }
];

export const City = {
  cityId:0,
  label: "",
  value: "",
  stateId: 0,
  countryId:0
}
  

