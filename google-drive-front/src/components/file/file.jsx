function File ({item}) { 
if(!item) {
    <h1>Loading...</h1>
  }else{
 return (
    <div className="text-center p-1" style={{background: '#000', marginTop: 50, color: '#fff'}} >
      <h5> {item} </h5>
    </div>
  )
}
  }

export {File};
