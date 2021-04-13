import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const useStyles = makeStyles(styles);

export default function Mahasiswa(){
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Button color="primary">
            Tambah Data Mahasiswa
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Card>
            <CardHeader color="primary">
              <h4>Data Mahasiswa</h4>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}