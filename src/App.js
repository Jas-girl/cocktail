import React,{useState,useEffect} from 'react'
import './App.css';
import Topsection from './components/Topsection'
import Displaysection from './components/Displaysection'

export var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
export var url1=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=`;

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  const[err,setErr]=useState(" ");
  const[category,setCategory]=useState("");
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setLoading(false);
        const response = await fetch(url);
        const result = await response.json();
        setData(result.drinks||[]);
       
      } catch (error) {
        console.error(error);
        setErr("server issue");
      }
    };
    {
      
      fetchData();
    }
  }, []);
 
  
  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  const SearchBtn=async() => {
       setLoading(true);
       
      try {
        
        setLoading(false);
        const response = await fetch(url+searchInput);
        const result = await response.json();
        if(!result.drinks){setErr("data is not found")
          setData([])
        }
        else{
          setErr(" ");
        setData(result.drinks||[]);}  
      } catch (error) {
        console.error(error);
        setData("Not found");
      }
      
    };
   const cockBtn=async()=>{
    if(setCategory())
    try {
      setLoading(false);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.drinks||[]);
      console.log(result.drinks||[]);
      setSearchInput(" ");
      setErr(" ");
     
    } catch (error) {
      console.error(error);
      setErr("server issue");
    }
   } 
   
  return (

    <div>
    <Topsection searchInput={searchInput} handleSearchChange={handleSearchChange}   data={data} SearchBtn={SearchBtn} cockBtn={cockBtn}/> 
    <Displaysection data={data} loading={loading} err={err} /></div>
  )
}

export default App