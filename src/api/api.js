import axiosInstance from "./index";
import qs from "qs";

const axios=axiosInstance

export const getBooks=()=>{return axios.get(`http://127.0.0.1:8000/residents/?isresided=1`)}
export const getunisresides=()=>{return axios.get(`http://127.0.0.1:8000/residents/?isresided=0`)}
export const getRes=(id)=>{return axios.get(`http://127.0.0.1:8000/residents/${id}/`)}
export const searchResname=(res_name)=>{return axios.get(`http://127.0.0.1:8000/residents/?res_name=${res_name}`)}
export const searchResid=(res_id)=>{return axios.get(`http://127.0.0.1:8000/residents/?res_id=${res_id}`)}


export  const PutRes=(id,pass,name,add,isres)=>{return axios.put(`http://127.0.0.1:8000/residents/`+id+`/`,
    qs.stringify({"res_id":id,"res_password":pass,"res_name":name,"res_address":add,"isresided":isres}))}
export  const PuteditRes=(id,pass,name,add,tel,age,idnumber)=>{return axios.put(`http://127.0.0.1:8000/residents/`+id+`/`,
qs.stringify({"res_id":id,"res_password":pass,"res_name":name,"res_address":add,"res_tel":tel,"res_age":age,"res_idnumber":idnumber}))}


export const postRes=(ruleForm)=>{return axios.post(`http://127.0.0.1:8000/residents/`,
    qs.stringify({"res_id":ruleForm.res_id,"res_password":ruleForm.res_password,"res_name":ruleForm.res_name,"res_address":ruleForm.res_address,
        "res_tel":ruleForm.res_tel,"res_age":ruleForm.res_age,"res_idnumber":ruleForm.res_idnumber,"isresided":1}))}

//abnormals模块
export const getAbnormals=()=>{return axios.get(`http://127.0.0.1:8000/abnormals/?ishealed=0`)}
export  const putAbns=(id,res_id)=>{return axios.put(`http://127.0.0.1:8000/abnormalstable/`+id+`/`,
    qs.stringify({"abnormal":res_id, "ishealed":1}))}
export const getIshealedAbnormals=()=>{return axios.get(`http://127.0.0.1:8000/abnormals/?ishealed=1`)}
export const postAbnormals=(abcondition,abnormal)=>{return axios.post(`http://127.0.0.1:8000/abnormalstable/`),
qs.stringify({"abcondition":abcondition, "abnormal": abnormal})}

export const searchAbnsname=(res_name)=>{return axios.get(`http://127.0.0.1:8000/abnormals/?res_name=${res_name}`)}
export const searchAbnsid=(res_id)=>{return axios.get(`http://127.0.0.1:8000/abnormals/?res_id=${res_id}`)}

//accessreg模块
export const getAccessregs=()=>{return axios.get(`http://127.0.0.1:8000/accessregs/`)}
export const searchAccsname=(res_name)=>{return axios.get(`http://127.0.0.1:8000/accessregs/?res_name=${res_name}`)}
export const searchAccsid=(res_id)=>{return axios.get(`http://127.0.0.1:8000/accessregs/?res_id=${res_id}`)}
export const postAccessregs=(ruleForm)=>{return axios.post(`http://127.0.0.1:8000/acctable/`),
qs.stringify({"accessor":ruleForm.accessor_id,"access_adr":ruleForm.access_adr,"accregis":ruleForm.accregis_id})}

//vaccination模块
export const getvaccs=()=>{return axios.get(`http://127.0.0.1:8000/vaccinationView/`)}
export const searchVaccname=(res_name)=>{return axios.get(`http://127.0.0.1:8000/vaccinationView/?res_name=${res_name}`)}
export const searchVaccid=(res_id)=>{return axios.get(`http://127.0.0.1:8000/vaccinationView/?res_id=${res_id}`)}


//inform模块
export const postInfo=(textarea1,textarea2)=>{return axios.post(`http://127.0.0.1:8000/inform/`),
qs.stringify({"inform_title":textarea1,"inform_text":textarea2})}
export const getInfo=()=>{return axios.get(`http://127.0.0.1:8000/inform/`)}

//materials模块
export const getMats=()=>{return axios.get(`http://127.0.0.1:8000/viewmaterials/`)}
