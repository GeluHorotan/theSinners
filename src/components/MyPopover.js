import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

const MyPopover = () => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover>
      <Popover.Button ref={setReferenceElement}>Solutions</Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className='tester100'
      >
        <StyledPopover className='tester'>TESTER</StyledPopover>
      </Popover.Panel>
    </Popover>
  );
};

const StyledPopover = styled.div`
  width: 25rem;
  height: 25rem;
  z-index: 100;
  position: absolute;
`;
export default MyPopover;
