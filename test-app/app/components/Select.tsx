import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Select, Option, Text } from 'react-native-ficus-ui';
import ExampleSection from '../../components/ExampleSection';

const SelectComponent = () => {
  const [selectValue, setSelectedValue] = useState(null);
  const [selectMultiValue, setSelectedMultiValue] = useState([]);
  const [selectSubmitValue, setSelectedSubmitValue] = useState(null);
  const selectRef = React.createRef();
  const selectMultiRef = React.createRef();
  const selectSubmitRef = React.createRef();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Select component
      </Text>
      <ExampleSection name="SINGLE VALUE">
        <Button
          full
          colorScheme="blue"
          onPress={() => {
            if (selectRef.current) {
              selectRef.current.open();
            }
          }}
        >
          {selectValue ? selectValue.toString() : 'Select'}
        </Button>

        <Select
          onSelect={setSelectedValue}
          ref={selectRef}
          value={selectValue}
          title="This is your title"
          mt="md"
          pb="2xl"
          message="This is the long message used to set some context"
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item, index) => (
            <Option value={item} py="md" px="xl">
              <Text>Option {index}</Text>
            </Option>
          )}
        />
      </ExampleSection>

      <ExampleSection name="MULTI VALUE">
        <Button
          full
          colorScheme="orange"
          onPress={() => {
            if (selectMultiRef.current) {
              selectMultiRef.current.open();
            }
          }}
        >
          {selectMultiValue?.length ? selectMultiValue.toString() : 'Select'}
        </Button>

        <Select
          isMultiple
          onSelect={setSelectedMultiValue}
          ref={selectMultiRef}
          value={selectMultiValue}
          title="This is your title"
          mt="md"
          pb="2xl"
          message="This is the long message used to set some context"
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item, index) => (
            <Option value={item} py="md" px="xl">
              <Text>Option {index}</Text>
            </Option>
          )}
        />
      </ExampleSection>

      <ExampleSection name="WITH SUBMIT">
        <Button
          full
          colorScheme="red"
          onPress={() => {
            if (selectSubmitRef.current) {
              selectSubmitRef.current.open();
            }
          }}
        >
          {selectSubmitValue ? selectSubmitValue.toString() : 'Select'}
        </Button>

        <Select
          submit
          onSelect={setSelectedSubmitValue}
          ref={selectSubmitRef}
          value={selectSubmitValue}
          title="This is your title"
          mt="md"
          pb="2xl"
          message="This is the long message used to set some context"
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item, index) => (
            <Option value={item} py="md" px="xl">
              <Text>Option {index}</Text>
            </Option>
          )}
        />
      </ExampleSection>
    </SafeAreaView>
  );
};

export default SelectComponent;
