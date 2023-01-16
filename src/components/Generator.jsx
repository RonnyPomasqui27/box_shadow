import React, { useState } from 'react';

const Generator = () => {

  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(10);
  const [Spread, setSpread] = useState(-1);
  const [color, setColor] = useState('#d1d5db');

  const [border, setBorder] = useState(1);
  const [heigth, setHeigth] = useState(15);
  const [width, setwidth] = useState(15);


  return (
    <>
      <header>
        <h3>Box Shadow Generator </h3>
        <div className="redes">
          <a href="https://github.com/RonnyPomasqui27" target={'_blank'}><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/pomasqui-ronny-46ab6a219/" target={'_blank'}><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </header>
      {/* <div className="titles">
      <h2>Customize Shadows</h2>
      <h2>Box Properties</h2>
      </div> */}
      <section className='generator_container'>
        <aside className='control_container'>
          <h4>Customize Shadows</h4>
          <div className="control_text">
            <p>Horizontal offset</p>
            <div className="control_input_px">
              <input type="text" value={horizontal} />
              <p>px</p>
            </div>
          </div>
          <input type="range"
            value={horizontal}
            onChange={(e) => setHorizontal(e.target.value)}
            max={100}
            min={-100}
          />

          <div className="control_text">
            <p>Vertical offset</p>
            <div className="control_input_px">
              <input type="text" value={vertical} />
              <p>px</p>
            </div>
          </div>
          <input type="range"
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
            max={100}
            min={-100}
          />

          <div className="control_text">
            <p>Blur radius</p>
            <div className="control_input_px">
              <input type="text" value={blur} />
              <p>px</p>
            </div>
          </div>
          <input type="range"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
            max={100}
            min={-100}
          />

          <div className="control_text">
            <p>Spread radius</p>
            <div className="control_input_px">
              <input type="text" value={Spread} />
              <p>px</p>
            </div>
          </div>
          <input type="range"
            value={Spread}
            onChange={(e) => setSpread(e.target.value)}
            max={100}
            min={-100}
          />

          <div className="control_text">
            <p>Color</p>
            <div className="control_input_px">
              <input type="text" value={color} style={{ width: '110px' }} />
            </div>
          </div>
          <input type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </aside>
        <aside className='draw_container'>
          <div className='box' style={{ boxShadow: `${horizontal}px ${vertical}px ${blur}px ${Spread}px ${color}`, width: `${width}rem`, height: `${heigth}rem`, borderRadius: `${border}rem` }}></div>
          <div className="box_info" >
            <p>{`box-shadow: ${horizontal}px ${vertical}px ${blur}px ${Spread}px ${color};`}</p>
          </div>
        </aside>
        <aside className='box_controls_container'>
          <h4>Box Properties</h4>
          <div className="control_text">
            <p>Border radius</p>
            <div className="control_input_px">
              <input type="text" value={border} />
              <p>rem</p>
            </div>
          </div>
          <input type="range"
            value={border}
            onChange={(e) => setBorder(e.target.value)}
            max={20}
            min={0}
          />

          <div className="control_text">
            <p>Height</p>
            <div className="control_input_px">
              <input type="text" value={heigth} />
              <p>rem</p>
            </div>
          </div>
          <input type="range"
            value={heigth}
            onChange={(e) => setHeigth(e.target.value)}
            max={40}
            min={0}
          />

          <div className="control_text">
            <p>Width</p>
            <div className="control_input_px">
              <input type="text" value={width} />
              <p>rem</p>
            </div>
          </div>
          <input type="range"
            value={width}
            onChange={(e) => setwidth(e.target.value)}
            max={40}
            min={0}
          />

          <div className="box_info" >
            <p>{`width: ${width} rem`}</p>
            <p>{`heigth: ${heigth} rem`}</p>
            <p>{`border-radius: ${border} rem`}</p>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Generator;