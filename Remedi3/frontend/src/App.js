import { useEffect, useState } from "react";
import Loader from "./components/loader";
import { createMed, deleteMed, updateMed, viewMeds } from "./functions";
import './App.css';
//<pre>{JSON.stringify(med)}</pre>//}


function App() {
  const[med, setMed] = useState({name:'', count: '', instructions:'', howMany:'' });
  const[meds, setMeds] = useState(null);
  const[currentId, setId]= useState(0);
  
  useEffect(() =>{
    let currentMed = currentId!==0?meds.find(med=>med._id===currentId):{name:'', instructions: '', count: '', howMany:''};
    setMed(currentMed);
  }, [currentId])

  useEffect(()=> {
    const getData = async()=>{
      const res = await viewMeds();
      setMeds(res);
    }
    getData();
  }, [currentId])
  
  const clear = ()=>{
    setId(0);
    setMed({name:'', instructions: '', count: '', howMany:''});  
  }

  useEffect(() => {
    const clearInput = (e) => {
      if(e.keyCode === 27){
        clear();
      }
    }
    window.addEventListener('keydown', clearInput)
  return () => window.removeEventListener('keydown', clearInput)
},[])

  const submitHandler = async(e)=>{
    e.preventDefault();
    if(currentId === 0){
    const res = await createMed(med);
    setMeds([...meds, res]);
    clear();
    }else{
      await updateMed(currentId, med);
      clear();
    }
  }
  const remove = async(id) => {
    await deleteMed(id);
    const res = await viewMeds();
      setMeds(res);
      clear();
  }
  return (
    <div>
      <a className="logo" href=""></a>
    <div className="container">
      <div className="row">
        
  <form onSubmit = {submitHandler} className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <i className="material-icons prefix">healing</i>
        <input id="icon_prefix" type="text" className="validate" 
        value={med.name}
        onChange={e=>setMed({...med, name: e.target.value})}/>
        <label htmlFor="icon_prefix">Medicine name</label>
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">description</i>
        <input id="icon_telephone" type="text" className="validate" 
        value={med.instructions}
        onChange={e=>setMed({...med, instructions: e.target.value})}/>
        <label htmlFor="description">instructions</label>
      </div>
    </div>
    <div className= "row">
    <div className="input-field col s6">
        <i className="material-icons prefix">description</i>
        <input id="icon_telephone" type="text" className="validate"
        value={med.count}
        onChange={e=>setMed({...med, count:e.target.value})}/>
        <label htmlFor="description">count</label>
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">description</i>
        <input id="icon_telephone" type="text" className="validate" 
        value={med.howMany}
        onChange={e=>setMed({...med, howMany:e.target.value})}/>
        <label htmlFor="description">howManyADay</label>
      </div>
    </div>
    <div className="row center-align">
      <button className="waves-effect
      waves-light btn">Submit</button>
    </div>
  </form>
  {
    !meds ? <Loader/> : meds.length>0? <ul className="collection">
      {meds.map(med =>(
      <li key={med._id}
      onClick={()=>setId(med._id)}
      className="collection-item"><div><h5>{med.name}</h5>
      <p>Instructions: {med.instructions}<p>Count: {med.count}<p>Dosage: {med.howMany}<a href="#!" onClick={()=>remove(med._id)}class="secondary-content"><i class="material-icons">delete</i></a></p></p></p></div></li>
      ))}
    
  </ul>:<div><h5>No Meds</h5></div>
  }
  
</div>
</div>
</div>
  );
}

export default App;
