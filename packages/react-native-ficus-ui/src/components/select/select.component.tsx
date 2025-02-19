/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useEffect, useImperativeHandle, useState } from 'react';

import { FlatList, SafeAreaView } from 'react-native';
import RNModal from 'react-native-modal';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { Button } from '../button/button.component';
import { ButtonProps } from '../button/button.type';
import { Text } from '../text/text.component';
import { getStyle } from './select.style';
import { CompoundedSelect, SelectProps, SelectRef } from './select.type';

const Select = React.forwardRef<SelectRef, SelectProps>(
  (incomingProps, ref) => {
    const { theme, windowWidth } = useTheme();
    const props = useDefaultProps(
      'Select',
      handleResponsiveProps(incomingProps, theme, windowWidth),
      {
        bg: 'white',
        borderRadius: 'none',
        flexDirection: 'column',
        showScrollIndicator: false,
        keyExtractor: (_: any, index: any) => `${index}`,
        submit: false,
        isMultiple: false,
      }
    );

    const {
      value,
      title,
      message,
      data,
      isMultiple,
      keyExtractor,
      renderItem,
      renderSubmitButton,
      onSelect: onSelectProp,
      submit,
      submitText,
      showScrollIndicator,
      style,
      ...rest
    } = props;

    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || []);

    const computedStyle = getStyle(theme, props);

    useEffect(() => {
      if (!visible) {
        setSelectedValue(value);
      }
    }, [visible]);

    /**
     * exposing functions to parent
     */
    useImperativeHandle(ref, () => ({
      close() {
        setVisible(false);
      },
      open() {
        setVisible(true);
      },
    }));

    /**
     * set values of select based if its multiple select
     * or single valued select
     *
     * @param selectValue
     */
    const onSelect = (selectValue: any) => {
      let finalValue;

      if (isMultiple) {
        const copy = selectedValue.slice();
        const index = selectedValue.indexOf(selectValue);
        if (index !== -1) {
          copy.splice(index, 1);
        } else {
          copy.push(selectValue);
        }

        setSelectedValue(copy);
        finalValue = copy;
      } else {
        setSelectedValue(selectValue);
        finalValue = selectValue;
      }

      if (!submit && !isMultiple) {
        onSelectProp(finalValue);
        setVisible(false);
      }
    };

    const onSubmit = () => {
      onSelectProp(selectedValue);
      setVisible(false);
    };

    /**
     * render title at top select modal
     */
    const renderTitle = () => {
      if (title) {
        return typeof title === 'string' ? (
          <Text
            px="xl"
            fontSize="lg"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {title}
          </Text>
        ) : (
          title
        );
      }

      return false;
    };

    /**
     * render message at top select modal
     */
    const renderMessage = () => {
      if (message) {
        return typeof message === 'string' ? (
          <Text px="xl" fontSize="lg">
            {message}
          </Text>
        ) : (
          message
        );
      }

      return false;
    };

    const renderFooter = () => {
      if (!submit && !isMultiple) {
        return;
      }

      const submitButtonElement = renderSubmitButton && renderSubmitButton();

      const mandatoryProps: Partial<ButtonProps> = {
        onPress: () => onSubmit(),
      };

      if (submitButtonElement) {
        return React.cloneElement(submitButtonElement, mandatoryProps);
      }

      return (
        <Button
          full
          borderRadius="none"
          colorScheme="green"
          {...mandatoryProps}
        >
          <Text fontSize="xl" py="xs" color="white">
            {submitText || 'Submit'}
          </Text>
        </Button>
      );
    };

    return (
      <RNModal
        backdropTransitionOutTiming={0}
        animationIn="slideInUp"
        isVisible={visible}
        backdropColor="black"
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        hideModalContentWhileAnimating
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}
        {...rest}
      >
        <Box style={computedStyle.wrapper}>
          <SafeAreaView style={computedStyle.container}>
            <>
              <Box py="xl">
                {renderTitle()}
                {renderMessage()}
              </Box>

              <Box flex={1}>
                <FlatList
                  data={data}
                  keyExtractor={keyExtractor}
                  showsVerticalScrollIndicator={showScrollIndicator}
                  renderItem={({ item, index }) =>
                    React.cloneElement(renderItem(item, index), {
                      onSelect,
                      selectedValue,
                    })
                  }
                />
              </Box>

              {renderFooter()}
            </>
          </SafeAreaView>
        </Box>
      </RNModal>
    );
  }
) as CompoundedSelect;

// Select.defaultProps = {
//   bg: 'white',
//   borderRadius: 'none',
//   flexDir: 'column',
//   // mb: 'xl',
//   // @ts-ignore
//   renderNoResultsView: (searchTerm) => (
//     <Div flex={1} px="2xl" py="xl">
//       <Text fontSize="lg">No results found for "{searchTerm}"</Text>
//     </Div>
//   ),
//   keyExtractor: (_, index) => `${index}`,
// };

export { Select };
