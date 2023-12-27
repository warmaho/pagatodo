import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/**
 * This component is generated as an example for axios
 *
 * To learn more about axios and data fetching,
 * please visit https://github.com/axios/axios
 */

const BASE_API_URL = "https://dev.obtenmas.com";

const API_URL = "/catom/api/challenge/banks";

const bApi = axios.create({
  baseURL: BASE_API_URL,
});

export const AxiosExample = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const count = useSelector((state: RootState) => state.counter.count);

  useEffect(() => {
    console.info("trying to launch the request")
    const isBlock = localStorage.getItem("block")
    if (!isBlock){
      bApi({
        method: "get",
        url: API_URL,
      })
        .then((res) => res.data)
        .then(
          (result) => {

            console.info("request made successfully")
            localStorage.setItem("block", "true");
            localStorage.setItem("data", JSON.stringify(result));
            setData(result);
            setIsLoaded(true);
          },
          (error) => {
            console.info("request made with error")
            setIsLoaded(true);
            setError(error);
          }
        );
    }else{
      console.info("the request was not launched")
      const data = localStorage.getItem("data")
      try {
        const parsedData = JSON.parse(data);

        if (Array.isArray(parsedData) && parsedData.every(item =>
          "description" in item &&
          "bankName" in item &&
          "age" in item &&
          "url" in item
        )) {

          console.info("localstorage data is recovered")
          setData(parsedData);
          setIsLoaded(true);
        } else {
          // Handle the case where the data doesn't meet the validation criteria
          setError({message:"No existing data in localStorage, refresh page"})
          console.info("cannot recover data from localstorage")
        }

      } catch (error) {
        console.info("cannot recover data from localstorage")
        setError({message:"No existing data in localStorage, refresh page"})
      }
    }

  }, [count]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4">
      <main data-testid="joke-container">
        <Row xs={1} sm={2} md={4}  className="g-4 d-flex justify-content-center align-items-center">
          {data.map((bank, idx) => (
            <Col key={idx}>
        <Card className="w-100 m-2">
          <Card.Img variant="top" src={bank.url} />
          <Card.Body>
            <Card.Title>{bank.bankName} - Age:{bank.age}</Card.Title>
            <Card.Text>
              {bank.description}
            </Card.Text>
          </Card.Body>
        </Card>
            </Col>
          ))}
        </Row>

      </main>

    </div>
  );
};
