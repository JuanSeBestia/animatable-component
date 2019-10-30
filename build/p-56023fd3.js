const e={LINEAR:"linear",EASE:"ease",EASE_IN:"ease-in",EASE_OUT:"ease-out",EASE_IN_OUT:"ease-in-out",EASE_IN_CUBIC:"ease-in-cubic",EASE_OUT_CUBIC:"ease-out-cubic",EASE_IN_OUT_CUBIC:"ease-in-out-cubic",EASE_IN_CIRC:"ease-in-circ",EASE_OUT_CIRC:"ease-out-circ",EASE_IN_OUT_CIRC:"ease-in-out-circ",EASE_IN_EXPO:"ease-in-expo",EASE_OUT_EXPO:"ease-out-expo",EASE_IN_OUT_EXPO:"ease-in-out-expo",EASE_IN_QUAD:"ease-in-quad",EASE_OUT_QUAD:"ease-out-quad",EASE_IN_OUT_QUAD:"ease-in-out-quad",EASE_IN_QUART:"ease-in-quart",EASE_OUT_QUART:"ease-out-quart",EASE_IN_OUT_QUART:"ease-in-out-quart",EASE_IN_QUINT:"ease-in-quint",EASE_OUT_QUINT:"ease-out-quint",EASE_IN_OUT_QUINT:"ease-in-out-quint",EASE_IN_SINE:"ease-in-sine",EASE_OUT_SINE:"ease-out-sine",EASE_IN_OUT_SINE:"ease-in-out-sine",EASE_IN_BACK:"ease-in-back",EASE_OUT_BACK:"ease-out-back",EASE_IN_OUT_BACK:"ease-in-out-back"},t={[e.LINEAR]:"linear",[e.EASE]:"cubic-bezier(0.25, 0.1, 0.25, 1)",[e.EASE_IN]:"cubic-bezier(0.42, 0, 1, 1)",[e.EASE_OUT]:"cubic-bezier(0, 0, 0.58, 1)",[e.EASE_IN_OUT]:"cubic-bezier(0.42, 0, 0.58, 1)",[e.EASE_IN_CUBIC]:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",[e.EASE_OUT_CUBIC]:"cubic-bezier(0.215, 0.61, 0.355, 1.0)",[e.EASE_IN_OUT_CUBIC]:"cubic-bezier(0.645, 0.045, 0.355, 1.0)",[e.EASE_IN_CIRC]:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",[e.EASE_OUT_CIRC]:"cubic-bezier(0.075, 0.82, 0.165, 1.0)",[e.EASE_IN_OUT_CIRC]:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",[e.EASE_IN_EXPO]:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",[e.EASE_OUT_EXPO]:"cubic-bezier(0.19, 1.0, 0.22, 1.0)",[e.EASE_IN_OUT_EXPO]:"cubic-bezier(1.0, 0.0, 0.0, 1.0)",[e.EASE_IN_QUAD]:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",[e.EASE_OUT_QUAD]:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",[e.EASE_IN_OUT_QUAD]:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",[e.EASE_IN_QUART]:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",[e.EASE_OUT_QUART]:"cubic-bezier(0.165, 0.84, 0.44, 1.0)",[e.EASE_IN_OUT_QUART]:"cubic-bezier(0.77, 0.0, 0.175, 1.0)",[e.EASE_IN_QUINT]:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",[e.EASE_OUT_QUINT]:"cubic-bezier(0.23, 1.0, 0.32, 1.0)",[e.EASE_IN_OUT_QUINT]:"cubic-bezier(0.86, 0.0, 0.07, 1.0)",[e.EASE_IN_SINE]:"cubic-bezier(0.47, 0.0, 0.745, 0.715)",[e.EASE_OUT_SINE]:"cubic-bezier(0.39, 0.575, 0.565, 1.0)",[e.EASE_IN_OUT_SINE]:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",[e.EASE_IN_BACK]:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",[e.EASE_OUT_BACK]:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",[e.EASE_IN_OUT_BACK]:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},s={BOUNCE:"bounce",FLASH:"flash",JELLO:"jello",PULSE:"pulse",ROTATE:"rotate",SHAKE:"shake",SWING:"swing",RUBBER_BAND:"rubberBand",TADA:"tada",WOBBLE:"wobble",HEART_BEAT:"heartBeat"},r="Animation not supported",a=Object.assign({},{[s.BOUNCE]:[{offset:0,transform:"translateY(0px)"},{offset:.2,transform:"translateY(0px)"},{offset:.4,transform:"translateY(-30px)"},{offset:.43,transform:"translateY(-30px)"},{offset:.53,transform:"translateY(0px)"},{offset:.7,transform:"translateY(-15px)"},{offset:.8,transform:"translateY(0px)"},{offset:.9,transform:"translateY(-4px)"},{offset:1,transform:"translateY(0px)"}],[s.FLASH]:[{offset:0,opacity:1},{offset:.25,opacity:0},{offset:.5,opacity:1},{offset:.75,opacity:0},{offset:1,opacity:1}],[s.JELLO]:[{offset:0,transform:"skewX(0deg) skewY(0deg)"},{offset:.111,transform:"skewX(0deg) skewY(0deg)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.333,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.666,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"skewX(0deg) skewY(0deg)"}],[s.PULSE]:[{offset:0,transform:"scale(1)"},{offset:.5,transform:"scale(1.05)"},{offset:1,transform:"scale(1)"}],[s.ROTATE]:[{offset:0,transform:"rotate(0deg)"},{offset:.25,transform:"rotate(90deg)"},{offset:.5,transform:"rotate(180deg)"},{offset:.75,transform:"rotate(270deg)"},{offset:1,transform:"rotate(360deg)"}],[s.SHAKE]:[{offset:0,transform:"translateX(0px)"},{offset:.1,transform:"translateX(-10px)"},{offset:.2,transform:"translateX(10px)"},{offset:.3,transform:"translateX(-10px)"},{offset:.4,transform:"translateX(10px)"},{offset:.5,transform:"translateX(-10px)"},{offset:.6,transform:"translateX(10px)"},{offset:.7,transform:"translateX(-10px)"},{offset:.8,transform:"translateX(10px)"},{offset:.9,transform:"translateX(-10px)"},{offset:1,transform:"translateX(0px)"}],[s.SWING]:[{offset:0,transform:"rotate(0deg)"},{offset:.2,transform:"rotate(15deg)"},{offset:.4,transform:"rotate(-10deg)"},{offset:.6,transform:"rotate(5deg)"},{offset:.8,transform:"rotate(-5deg)"},{offset:1,transform:"rotate(0deg)"}],[s.RUBBER_BAND]:[{offset:0,transform:"scale(1, 1)"},{offset:.3,transform:"scale(1.25, 0.75)"},{offset:.4,transform:"scale(0.75, 1.25)"},{offset:.5,transform:"scale(1.15, 0.85)"},{offset:.65,transform:"scale(0.95, 1.05)"},{offset:.75,transform:"scale(1.05, 0.95)"},{offset:1,transform:"scale(1, 1)"}],[s.TADA]:[{offset:0,transform:"scale(1) rotate(0deg)"},{offset:.1,transform:"scale(0.9) rotate(-3deg)"},{offset:.2,transform:"scale(0.9) rotate(-3deg)"},{offset:.3,transform:"scale(1.1) rotate(-3deg)"},{offset:.4,transform:"scale(1.1) rotate(3deg)"},{offset:.5,transform:"scale(1.1) rotate(-3deg)"},{offset:.6,transform:"scale(1.1) rotate(3deg)"},{offset:.7,transform:"scale(1.1) rotate(-3deg)"},{offset:.8,transform:"scale(1.1) rotate(3deg)"},{offset:.9,transform:"scale(1.1) rotate(3deg)"},{offset:1,transform:"scale(1) rotate(0deg)"}],[s.WOBBLE]:[{offset:0,transform:"translateX(0px) rotate(0deg)"},{offset:.15,transform:"translateX(-25px) rotate(-5deg)"},{offset:.3,transform:"translateX(20px) rotate(3deg)"},{offset:.45,transform:"translateX(-15px) rotate(-3deg)"},{offset:.6,transform:"translateX(10px) rotate(2deg)"},{offset:.75,transform:"translateX(-5px) rotate(-1deg)"},{offset:1,transform:"translateX(0px) rotate(0deg)"}],[s.HEART_BEAT]:[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"},{offset:1,transform:"scale(1)"}]});export{s as A,e as E,t as a,r as b,a as c};