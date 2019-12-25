import React, { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  FormGroup, FormFeedback
} from "reactstrap";

const UserSearchForm = props => {
  const [invalid, setInvalid] = useState(false);

  const searchUpdate = props.searchUpdate;

  let username = "";

  const submit = () => {
    if (username !== "") {
        setInvalid(false);
        searchUpdate(username);
    } else {
        setInvalid(true);
    }
  };

  let form;

  if (invalid) {
      form = 
    <FormGroup>
      <InputGroup>
        <Input
          placeholder="Username"
          onChange={e => (username = e.target.value)}
          invalid
        />
        <FormFeedback tooltip>Oh noes! That isn't a valid username!</FormFeedback>
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={e => submit()}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>;
  } else {
      form = 
    <FormGroup>
      <InputGroup>
        <Input
          placeholder="Username"
          onChange={e => (username = e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={e => submit()}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>;
  }

  return <div>
      {form}
  </div>;
};

export default UserSearchForm;
