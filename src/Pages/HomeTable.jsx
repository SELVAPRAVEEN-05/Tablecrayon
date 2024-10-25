import React, { useState } from "react";
import { Outline, Flex, Table1, Container, Heading } from "./Style";
import Searchstar from "../components/Search/Search";
import Filterstar from "../components/Iconbutton/Filter";
import Tablesty from "../components/Table/Table";
import Title from "../components/Title/Heading";

function HomeTable() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Outline>
      <Container>
        <Heading>
          <Title />
          <Flex>
            <Searchstar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Filterstar />
          </Flex>
        </Heading>
        <Table1>
          <Tablesty searchQuery={searchQuery} />
        </Table1>
      </Container>
    </Outline>
  );
}

export default HomeTable;
