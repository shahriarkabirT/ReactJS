import React , {useState} from 'react';
import styles from './colorPicker.module.css'
function colorPicker(){
    const [colorValue, setColor] = useState("#FFFFFF");
    const changeColor = (event) =>{
        setColor(event.target.value);
    }



    const copyToClipboard = (event) => {
        navigator.clipboard.writeText(event.target.value).then(() => {
          alert('Text copied to clipboard');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      };


    return(
        <>
            
            <div className={styles.colorPickerContainer}>
                <div><button className={styles.colorValue} value={colorValue} style={{backgroundColor:colorValue}} onClick={(event)=>copyToClipboard(event) }>
                    {colorValue}
                    </button></div>
                <div className="textToCopy">
                <button className={styles.copyButton} value={colorValue} onClick={(event)=>copyToClipboard(event)}>Copy</button>
                </div>

                <p>Pick a color:</p>
                <div className={styles.colorPicker}>
                <input className={styles.input} type="color" value={colorValue} onChange={changeColor} />
                </div>
            </div>
        </>
    );
}
export default colorPicker