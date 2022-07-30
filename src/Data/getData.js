
const getCardsData = async () => {
   try {
       const algo =  await fetch('http://localhost:3000/api/cardsInfo', {  method: "GET" });
       console.log('informacioncita XDXD: ' + JSON.stringify(algo, null, 2));
       return algo;
   } catch (error) {
        console.log('ERROR FETCH ---> ' + JSON.stringify(error, null, 2));
   }
}

export default getCardsData;