import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

import React, { useState } from 'react';

const RenderOnSight = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <VisibilitySensor
      active={active}
      onChange={(isVisible) => isVisible && setActive(false)}
      partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={280}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
          }}>
          {(props) => <div style={{ ...props }}>{children}</div>}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

export default RenderOnSight;
