import React, { useEffect } from 'react';

const useEscape = (onEscape: any) => {
    useEffect(() => {
        const handleEsc = (event: any) => {
            if (event.keyCode === 27) 
                onEscape();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onEscape]);
}

export default useEscape


// eslint-disable-next-line react/no-deprecated
const EscapeListen =({
  handleKeyDown: function(e:any) {
    if (e.keyCode === 27) {
      console.log('You pressed the escape key!')
    }
  },

  render: function() {
    return (
      <input type='text'
             onKeyDown={this.handleKeyDown} />
    )
  }
})