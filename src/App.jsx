
import axios from 'axios';
import './App.css'

function App() {

  const url ="https://crudcrud.com/api/fb183fa4dc9f46ecbee560ab7d958d10/products";
 async function FetchData(){
    try{
      const response = await axios.get(url);
      console.log(response.data);

    }catch(error){
      console.log(error);
    }
  }

  async function AddData(){
    try{
      const person ={
         name : "Ahmed",
        email : "Ahmed@gmail.com",
        age:28,
        city:"Cairo"
      }
      const res = await axios.post(url,person);
      console.log(res.data);
     }catch(error){
      console.log(error);
     }
  }
  async function  updateData(id) {
    try{
          const newperson ={
         name : "Nour",
        email : "Nour@gmail.com",
        age:28,
        city:"Alex"
      }
      const response = await axios.put(`${url}/${id}`,newperson);
      console.log("updated sucessfully");

    } catch(error){
      console.log(error);
    }   
  }
  async function DeleteData(id){
    try{
      await axios.delete(`${url}/${id}`);
      console.log("Deleted Sucessfully");

    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
    <button onClick={FetchData}>FetchData</button>
    <button onClick={AddData}>AddData</button>
    <button onClick={()=>updateData("69b957a407446203e8d3b48b")}>updateData</button>
    <button onClick={()=>DeleteData("69b957a407446203e8d3b48b")}>DeleteData</button>
    </>
  )
}

export default App
