import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView, FlatList } from 'react-native';
import { useState, useImperativeHandle, useEffect } from 'react';

import { getStyle } from './select.style';
import { Box } from '../box/box.component';
import { useTheme } from '../../theme';
import { Text } from '../text/text.component';
import { Button } from '../button/button.component';
import { SelectProps, SelectRef, CompoundedSelect } from './select.type';
import { ButtonProps } from '../button/button.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';

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
     * @param value
     */
    const onSelect = (value: any) => {
      let finalValue;

      if (isMultiple) {
        const copy = selectedValue.slice();
        const index = selectedValue.indexOf(value);
        if (index !== -1) {
          copy.splice(index, 1);
        } else {
          copy.push(value);
        }

        setSelectedValue(copy);
        finalValue = copy;
      } else {
        setSelectedValue(value);
        finalValue = value;
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
