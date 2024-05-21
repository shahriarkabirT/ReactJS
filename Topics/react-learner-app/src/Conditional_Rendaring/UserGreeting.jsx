function UserGreeting(props){
    //one way

   /*
    if(props.isLoggedIn){
        return <h2>Welcome {props.userName}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }
    */

    //another way
    const styles = {
        backgroundColor: "RGB(75, 76, 87)",
        color: "white",
        padding: "50px",
        marginLeft:"50px",
        width:"100%",
        justifyContent:"center",
        

        
      
    }

    const welcomeMessage = <div style = {styles}><h2> Welcome {props.userName} </h2></div>;
    const loginPromt =  <h2>Please log in to continue</h2>;

    return(props.isLoggedIn ? welcomeMessage : loginPromt);

}

export default UserGreeting