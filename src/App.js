
import { Button, Segment, Icon, Grid} from 'semantic-ui-react'
import {  useState } from 'react';
import background from './sfa.jpg';

const App = () => {  
  const [count, setCount] = useState(0)
  // const timer = useRef(null);
  // const increment = () => {
  // timer.current = setInterval(() => setCount(prev => prev + 1), 1000);
  // }

  // function timeoutClear() {
  //   clearInterval(timer.current);
  // }

  // function count() {
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   setCount(count - 1);
  // };

  // let counterColor = "green";
  // if (count >= 5 && count <= 9) {
  //   counterColor = "blue";
  // } else if (count === 10) {
  //   counterColor = "red";
  // }

  return (
    <div style={{backgroundImage:`url(${background})`,
    // backgroundColor: 'pink'
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>     
      <Grid textAlign='center'>
          <Segment raised compact style={{ marginTop:"100px",width:"350px"}}>
            <Segment raised compact style={{width:"350px"}}>
            <Grid centered style={{height:"100px",width: "350px"}}>
              <Grid.Row centered>
                <Grid.Column color ="teal" textAlign='center'><h1>Counter App</h1></Grid.Column>
              </Grid.Row>
            </Grid>
  
            <Grid centered style={{height:"150px",width: "350px" }}>
              <Grid.Row centered>
                <Grid.Column color='teal'textAlign='center'><h2>{count}</h2></Grid.Column>  
              </Grid.Row>
            </Grid>
          
            <Grid centered>
              <Grid.Row centered>
                <Button color="green" animated onClick={()=> setCount(count + 1)}>
                  <Button.Content visible >Increase</Button.Content>
                  <Button.Content hidden>
                    <Icon name='add'/>
                  </Button.Content>
                </Button>

                <Grid.Column 
                style={{width:"50px"}}>
                </Grid.Column>

                <Button color='red' animated onClick={() => { if (count > 0) setCount(count - 1) }}>
                  <Button.Content visible >Decrease</Button.Content>
                  <Button.Content hidden>
                    <Icon name='minus' />
                  </Button.Content>
                </Button>
              </Grid.Row>
            </Grid>
            </Segment>
          </Segment>
      </Grid> 

      <Grid textAlign='center'style={{marginTop:"180px",width: "1300px",color:"blue",backgroundColor: 'pink'}}><h1>Sharique Ahmad...(12105943)</h1></Grid>
    </div>
  )
  
}
export default App;
