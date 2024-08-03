import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContextProvider";
import HouseCard from "../../model/HouseCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../dbConfig/firebaseConfig";
import { Button, Container } from "react-bootstrap";

const House = () => {
  const { userUid } = useContext(LoginContext);

  const [houseDetails, setHouseDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //get data from backend
  const fetchData = async () => {
    const houseRef = collection(db, "houseDetails");
    const querySnapshot = await getDocs(houseRef);
    querySnapshot.forEach((doc) => {
      setHouseDetails([...houseDetails, doc.data()]);
    });
  };

  console.log(houseDetails);
  return (
    <Container className="d-flex gap-4 p-4 flex-column">
      {houseDetails.map((houseData) => {
        return (
          <div key={houseData.id}>
            <HouseCard houseData={houseData} />
          </div>
        );
      })}
      <Container>
        <Button>Add House Detail</Button>
      </Container>
    </Container>
  );
};

export default House;
