import { Card , Row , Col } from "react-bootstrap";
// import { useState,useEffect} from "react";



function Page({data}) {
    const date = new Date();
    
    
    const day= date.getDate();
   
    const month = date.getMonth();
    const year = date.getFullYear();

   

    
    return(
        <>
        {/* <Row> */}
         {/* <Col lg={2}>
        </Col>  */}
        
        {/* {data.lenght>0 && ( */}
        {/* <Row>
            <Col>
            </Col>
        </Row> */}
        <Row >
        <Col lg={2}>
            {
                <>
                <div style={{marginLeft:'5rem', marginTop:'3rem' }}>
                  <h7>Today Date</h7>
                <h3>{day}, {month}, {year}</h3>
                <hr></hr>
                

                </div>
                <div style={{marginLeft:'5rem' }}>
                <h4>Max Temp:</h4>
                <h4>Min Temp:</h4>
                <h4>Humidity:</h4>
                <h4>Pressure:</h4>
                <h4>Wind:</h4>
                </div>
                </>
                
            }
        </Col> 
        
            
        {data.map((item , index) => (
            <Col key={index}  className="mt-4 ">
            <h5 className="ms-5 ">{day+index}, {month},{year}</h5>
        
        <Card className="text-center  text-white" style={{ width: '12rem' , background: 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%) ', 
 
  padding: '20px' ,
  color: 'white' 
}}>
      <Card.Header as="h5" > <img src= {`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`} alt="" /> {item?.weather[0]?.main} </Card.Header>
      <Card.Body>
        
        <Card.Title>{item.main?.temp_max}</Card.Title>
        <Card.Title>{item.main?.temp_min}</Card.Title>
        <Card.Title>{item.main?.humidity}</Card.Title>
        <Card.Title>{item.main?.pressure}</Card.Title>
        <Card.Title>{item.wind?.speed}</Card.Title>
       
      </Card.Body>
    </Card>
        
        
        </Col>


         ) )}







        {/* <Col>
        
        <Card>
      <Card.Header as="h5"> <img src= {`https://openweathermap.org/img/wn/${data[0]?.weather[0]?.icon}.png`} alt="" /></Card.Header>
      <Card.Body>
        <Card.Title>{data[0]?.main?.temp_max}</Card.Title>
        <Card.Title>{data[0]?.main?.temp_min}</Card.Title>
        <Card.Title>{data[0]?.main?.humidity}</Card.Title>
        <Card.Title>{data[0]?.main?.pressure}</Card.Title>
        <Card.Title>{data[0]?.main?.temp}</Card.Title>
       
      </Card.Body>
    </Card>
        
        
        </Col> */}
        </Row>
         {/* )}  */}
        
        
        
        
        
        
        {/* </Row> */}


        
        
        
        
        
        
        
        
        </>






    );

   

}

export default Page;