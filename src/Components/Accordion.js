import React, { useRef, useState } from 'react';
import classes from './Accordion.module.css';

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className={classes['rc-accordion-card']}>
      <div className={classes['rc-accordion-header']}>
        <div
          className={`${classes['rc-accordion-toggle']} ${
            active === id ? `${classes['active']}` : ''
          } p-3`}
          onClick={() => handleToggle(id)}
        >
          <h5 className={classes['rc-accordion-title']}>{header}</h5>
          <i
            className={`fa fa-chevron-down ${classes['rc-accordion-icon']}`}
          ></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`${classes['rc-collapse']} ${
          active === id ? `${classes['show']}` : ''
        }`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={classes['rc-accordion-body']}>
          <p className='mb-0'>{text}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = (props) => {
  const [active, setActive] = useState(null);
  const { faqs } = props;

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className='container-fluid mt-2 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 mt-2'>
            <div className='card-body'>
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    active={active}
                    handleToggle={handleToggle}
                    faq={faq}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
