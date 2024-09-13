const darkTheme = {
    ontainerColor : "#fff",
    firstColor : 'hsl(353, 100%, 65%)',
    titleColor: 'hsl(244, 74%, 26%)',
    textColor: 'hsl(244, 16%, 43%)',
    bodyColor: 'hsl(258, 60%, 98%)' , 
    secondColor : "#2e302e9a",
    iconColor: '#424242',
    linkColor: '#ffd15c',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderInputColor: "hsl(258, 60%, 98%)", 
    settingColor: '#b4a6a7',
    
    }
    
    const lightTheme = {
    ontainerColor : "#212121",
    firstColor : "#00bcd4",
    titleColor: "#f3f3f3",
    textColor: "#fff",
    secondColor : "#8b88b1",
    bodyColor:  "#212121", 
    iconColor: '#f9f7fd',
    linkColor: '#00bcd4',
    borderColor: 'rgb(69 67 96)',
    borderInputColor: '#00bcd4', 
    settingColor: '#524543',
    
    } 
    
    const defaultTheme ={
        fontSize : {
            s : "12px" , 
            sm : "14px" , 
            md : "16px" , 
            lg : "18px" , 
        },
        borderRadius : {
            small : "5px" ,
            medium :  "10px" ,
            large :  "15px" ,
            circle :  "50px" ,
        }
    }
    
    const theme = {
        dark : {
            color : darkTheme,
            ...defaultTheme,
        },
        light : {
            color : lightTheme,
            ...defaultTheme
        }
    }
    
    export default theme ;