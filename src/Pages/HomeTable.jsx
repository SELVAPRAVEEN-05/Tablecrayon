import React from "react";
import { Outline, Flex, Table1, Container, Heading } from "./Style";
import Searchstar from "../components/Search/Search";
import Filterstar from "../components/Iconbutton/Filter";
import Tablesty from "../components/Table/Table";
import Title from "../components/Title/Heading";

function HomeTable() {
  return (
    <Outline>
      <Container>
        <Heading>
          <Title />
          <Flex>
            <Searchstar />
            <Filterstar />
          </Flex>
        </Heading>
        <Table1>
          <Tablesty />
        </Table1>
      </Container>
    </Outline>
  );
}

export default HomeTable;
