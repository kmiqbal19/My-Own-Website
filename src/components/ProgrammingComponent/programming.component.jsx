import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./programming.component.css";
function ProgrammingComponent() {
  gsap.registerPlugin(ScrollTrigger);
  let progWindowRef = useRef(null);
  let progSvgRef = useRef(null);
  let cursorProgRef = useRef(null);
  let boyProgRef = useRef(null);
  let boyArmProgRef = useRef(null);
  let boyHairProgRef = useRef(null);
  let leafProgRef = useRef(null);
  let paraRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 300px)": function () {
        // Programming Window
        const windowTl = gsap.timeline({
          scrollTrigger: {
            trigger: progSvgRef.current,
            start: "30% center",
            end: "+=50",
            // markers: true,

            toggleActions: "play none none reverse",
          },
        });
        windowTl
          .to(progWindowRef.current, { scale: 0.9, x: 100, duration: 1 })
          .from(boyProgRef.current, { x: -600, ease: "ease", duration: 1 })
          .to(paraRef.current, {
            opacity: 1,
            duration: 0.5,
            y: -260,
            ease: "ease",
          });
        // Programming Window Cursor
        const cursorProgTl = gsap.timeline({ repeat: -1 });
        cursorProgTl
          .to(cursorProgRef.current, { opacity: 0, duration: 1, ease: "ease" })
          .to(cursorProgRef.current, {
            opacity: 1,
            ease: "ease",
            duration: 0.5,
          });
        // Boy Arm

        const armProgTl = gsap.timeline({ repeat: -1 });
        armProgTl
          .to(boyArmProgRef.current, {
            rotate: 10,
            ease: "ease",
            duration: 0.8,
          })
          .to(boyArmProgRef.current, {
            rotate: 0,
            delay: 0.5,

            ease: "ease",
            duration: 0.8,
          })
          .to(boyHairProgRef.current, {
            rotate: -5,
            transformOrigin: "center",

            ease: "ease",
            duration: 0.5,
          });
        // Leafs
        gsap.to(leafProgRef.current, { x: 10 });
        const leafsProgTl = gsap.timeline({ repeat: -1 });
        leafsProgTl
          .to(leafProgRef.current, {
            rotate: -10,
            ease: "ease",
            duration: 1,
            transformOrigin: "bottom",
          })
          .to(leafProgRef.current, {
            rotate: 0,
            ease: "ease",
            duration: 1,
            transformOrigin: "bottom",
          });
      },
    });
  }, []);

  return (
    <div className="prog-container">
      <svg
        ref={progSvgRef}
        className="prog-svg"
        width="1400"
        height="800"
        viewBox="0 0 1500 986"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="prog-frame">
          <rect width="1400" height="800" fill="none" />
          <g id="programming">
            <g ref={progWindowRef} className="window-prog">
              <path
                id="Vector"
                d="M493.818 664.722V47.0476H1400.5V664.722H493.818Z"
                fill="#E6E6E6"
                stroke="black"
              />
              <path
                id="Vector_2"
                d="M519.773 628.121V124.645H1374.54V628.121H519.773Z"
                fill="white"
                stroke="black"
              />
              <path
                id="Vector_3"
                d="M493.43 86.5395V46.5H1400.11V86.5395H493.43Z"
                fill="#FF637F"
                stroke="black"
              />
              <path
                id="Vector_4"
                d="M528.234 66.9816C528.234 70.9361 525.229 74.0879 521.586 74.0879C517.944 74.0879 514.939 70.9361 514.939 66.9816C514.939 63.0271 517.944 59.8752 521.586 59.8752C525.229 59.8752 528.234 63.0271 528.234 66.9816Z"
                fill="white"
                stroke="black"
              />
              <path
                id="Vector_5"
                d="M555.362 66.9816C555.362 70.9361 552.357 74.0879 548.715 74.0879C545.073 74.0879 542.068 70.9361 542.068 66.9816C542.068 63.0271 545.073 59.8752 548.715 59.8752C552.357 59.8752 555.362 63.0271 555.362 66.9816Z"
                fill="white"
                stroke="black"
              />
              <path
                id="Vector_6"
                d="M582.491 66.9816C582.491 70.9361 579.486 74.0879 575.843 74.0879C572.201 74.0879 569.196 70.9361 569.196 66.9816C569.196 63.027 572.201 59.8752 575.843 59.8752C579.486 59.8752 582.491 63.027 582.491 66.9816Z"
                fill="white"
                stroke="black"
              />
              <path
                id="Vector_7"
                d="M1132.9 171.396H854.288C853.694 171.312 853.148 171.001 852.752 170.521C852.357 170.041 852.139 169.425 852.139 168.786C852.139 168.148 852.357 167.531 852.752 167.051C853.148 166.571 853.694 166.26 854.288 166.177H1132.9C1133.49 166.26 1134.04 166.571 1134.44 167.051C1134.83 167.531 1135.05 168.148 1135.05 168.786C1135.05 169.425 1134.83 170.041 1134.44 170.521C1134.04 171.001 1133.49 171.312 1132.9 171.396Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_8"
                d="M939.85 200.097H762.708C762.113 200.014 761.567 199.703 761.172 199.223C760.776 198.743 760.558 198.126 760.558 197.488C760.558 196.849 760.776 196.233 761.172 195.753C761.567 195.273 762.113 194.962 762.708 194.879H939.85C940.445 194.962 940.991 195.273 941.386 195.753C941.781 196.233 942 196.849 942 197.488C942 198.126 941.781 198.743 941.386 199.223C940.991 199.703 940.445 200.014 939.85 200.097Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_9"
                d="M1132.9 200.619H955.758C955.163 200.536 954.617 200.225 954.222 199.745C953.826 199.265 953.608 198.648 953.608 198.01C953.608 197.371 953.826 196.755 954.222 196.275C954.617 195.795 955.163 195.484 955.758 195.401H1132.9C1133.49 195.484 1134.04 195.795 1134.44 196.275C1134.83 196.755 1135.05 197.371 1135.05 198.01C1135.05 198.648 1134.83 199.265 1134.44 199.745C1134.04 200.225 1133.49 200.536 1132.9 200.619H1132.9Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_10"
                d="M940.28 228.799H763.138C762.543 228.715 761.997 228.405 761.602 227.925C761.206 227.445 760.988 226.828 760.988 226.189C760.988 225.551 761.206 224.934 761.602 224.454C761.997 223.974 762.543 223.664 763.138 223.58H940.28C940.874 223.664 941.42 223.974 941.816 224.454C942.211 224.934 942.429 225.551 942.429 226.189C942.429 226.828 942.211 227.445 941.816 227.925C941.42 228.405 940.874 228.715 940.28 228.799Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_11"
                d="M940.71 257.5H763.568C762.973 257.417 762.427 257.106 762.032 256.626C761.636 256.146 761.418 255.529 761.418 254.891C761.418 254.253 761.636 253.636 762.032 253.156C762.427 252.676 762.973 252.365 763.568 252.282H940.71C941.304 252.365 941.85 252.676 942.246 253.156C942.641 253.636 942.859 254.253 942.859 254.891C942.859 255.529 942.641 256.146 942.246 256.626C941.85 257.106 941.304 257.417 940.71 257.5Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_12"
                d="M1021.11 228.799H970.377C969.782 228.715 969.236 228.405 968.84 227.925C968.445 227.445 968.227 226.828 968.227 226.189C968.227 225.551 968.445 224.934 968.84 224.454C969.236 223.974 969.782 223.664 970.377 223.58H1021.11C1021.71 223.664 1022.25 223.974 1022.65 224.454C1023.04 224.934 1023.26 225.551 1023.26 226.189C1023.26 226.828 1023.04 227.445 1022.65 227.925C1022.25 228.405 1021.71 228.715 1021.11 228.799Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_13"
                d="M1021.11 256.978H970.377C969.782 256.895 969.236 256.584 968.84 256.104C968.445 255.624 968.227 255.008 968.227 254.369C968.227 253.731 968.445 253.114 968.84 252.634C969.236 252.154 969.782 251.843 970.377 251.76H1021.11C1021.71 251.843 1022.25 252.154 1022.65 252.634C1023.04 253.114 1023.26 253.731 1023.26 254.369C1023.26 255.008 1023.04 255.624 1022.65 256.104C1022.25 256.584 1021.71 256.895 1021.11 256.978Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_14"
                d="M1106.24 256.978H1055.51C1054.91 256.895 1054.37 256.584 1053.97 256.104C1053.58 255.624 1053.36 255.008 1053.36 254.369C1053.36 253.731 1053.58 253.114 1053.97 252.634C1054.37 252.154 1054.91 251.843 1055.51 251.76H1106.24C1106.84 251.843 1107.38 252.154 1107.78 252.634C1108.17 253.114 1108.39 253.731 1108.39 254.369C1108.39 255.008 1108.17 255.624 1107.78 256.104C1107.38 256.584 1106.84 256.895 1106.24 256.978Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_15"
                d="M812.153 171.396H761.418C760.823 171.312 760.277 171.001 759.882 170.521C759.486 170.041 759.268 169.425 759.268 168.786C759.268 168.148 759.486 167.531 759.882 167.051C760.277 166.571 760.823 166.26 761.418 166.177H812.153C812.747 166.26 813.293 166.571 813.689 167.051C814.084 167.531 814.302 168.148 814.302 168.786C814.302 169.425 814.084 170.041 813.689 170.521C813.293 171.001 812.747 171.312 812.153 171.396Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_16"
                d="M939.205 500.484H762.063C761.468 500.401 760.922 500.09 760.527 499.61C760.131 499.13 759.913 498.513 759.913 497.875C759.913 497.236 760.131 496.62 760.527 496.14C760.922 495.66 761.468 495.349 762.063 495.266H939.205C939.8 495.349 940.346 495.66 940.741 496.14C941.137 496.62 941.355 497.236 941.355 497.875C941.355 498.513 941.137 499.13 940.741 499.61C940.346 500.09 939.8 500.401 939.205 500.484H939.205Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_17"
                d="M938.345 557.887H761.203C760.608 557.804 760.062 557.493 759.667 557.013C759.271 556.533 759.053 555.916 759.053 555.278C759.053 554.64 759.271 554.023 759.667 553.543C760.062 553.063 760.608 552.752 761.203 552.669H938.345C938.94 552.752 939.486 553.063 939.881 553.543C940.277 554.023 940.495 554.64 940.495 555.278C940.495 555.916 940.277 556.533 939.881 557.013C939.486 557.493 938.94 557.804 938.345 557.887H938.345Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_18"
                d="M938.775 586.589H761.633C761.038 586.505 760.492 586.195 760.097 585.715C759.701 585.235 759.483 584.618 759.483 583.98C759.483 583.341 759.701 582.725 760.097 582.244C760.492 581.764 761.038 581.454 761.633 581.37H938.775C939.37 581.454 939.916 581.764 940.311 582.244C940.707 582.725 940.925 583.341 940.925 583.98C940.925 584.618 940.707 585.235 940.311 585.715C939.916 586.195 939.37 586.505 938.775 586.589H938.775Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_19"
                d="M1014.45 558.409H963.712C963.118 558.326 962.572 558.015 962.176 557.535C961.781 557.055 961.562 556.438 961.562 555.8C961.562 555.161 961.781 554.545 962.176 554.065C962.572 553.585 963.118 553.274 963.712 553.191H1014.45C1015.04 553.274 1015.59 553.585 1015.98 554.065C1016.38 554.545 1016.6 555.161 1016.6 555.8C1016.6 556.438 1016.38 557.055 1015.98 557.535C1015.59 558.015 1015.04 558.326 1014.45 558.409Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_20"
                d="M1014.45 586.589H963.712C963.118 586.505 962.572 586.195 962.176 585.715C961.781 585.235 961.562 584.618 961.562 583.98C961.562 583.341 961.781 582.725 962.176 582.244C962.572 581.764 963.118 581.454 963.712 581.37H1014.45C1015.04 581.454 1015.59 581.764 1015.98 582.244C1016.38 582.725 1016.6 583.341 1016.6 583.98C1016.6 584.618 1016.38 585.235 1015.98 585.715C1015.59 586.195 1015.04 586.505 1014.45 586.589Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_21"
                d="M1099.58 558.409H1048.84C1048.25 558.326 1047.7 558.015 1047.31 557.535C1046.91 557.055 1046.69 556.438 1046.69 555.8C1046.69 555.161 1046.91 554.545 1047.31 554.065C1047.7 553.585 1048.25 553.274 1048.84 553.191H1099.58C1100.17 553.274 1100.72 553.585 1101.11 554.065C1101.51 554.545 1101.73 555.161 1101.73 555.8C1101.73 556.438 1101.51 557.055 1101.11 557.535C1100.72 558.015 1100.17 558.326 1099.58 558.409Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_22"
                d="M1133.11 529.186H854.503C853.909 529.102 853.363 528.792 852.967 528.312C852.572 527.832 852.354 527.215 852.354 526.576C852.354 525.938 852.572 525.321 852.967 524.841C853.363 524.361 853.909 524.051 854.503 523.967H1133.11C1133.71 524.051 1134.26 524.361 1134.65 524.841C1135.05 525.321 1135.26 525.938 1135.26 526.576C1135.26 527.215 1135.05 527.832 1134.65 528.312C1134.26 528.792 1133.71 529.102 1133.11 529.186Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_23"
                d="M812.368 529.186H761.633C761.038 529.102 760.492 528.792 760.097 528.312C759.701 527.832 759.483 527.215 759.483 526.576C759.483 525.938 759.701 525.321 760.097 524.841C760.492 524.361 761.038 524.051 761.633 523.967H812.368C812.962 524.051 813.508 524.361 813.904 524.841C814.299 525.321 814.517 525.938 814.517 526.576C814.517 527.215 814.299 527.832 813.904 528.312C813.508 528.792 812.962 529.102 812.368 529.186Z"
                fill="#CCCCCC"
              />
              <rect
                ref={cursorProgRef}
                className="cursor-prog"
                x="944.5"
                y="280.5"
                width="9"
                height="191"
                fill="#3989AB"
                stroke="black"
              />
              <path
                id="Vector_24"
                d="M859.513 376.276L859.192 376.618L859.513 376.961L911.217 431.987L896.423 447.732L828.321 376.162L896.423 304.59L911.646 320.793L859.513 376.276Z"
                fill="#E6E6E6"
                stroke="black"
              />
              <path
                id="Vector_25"
                d="M1066 376.162L997.897 447.732L983.102 431.987L1034.8 376.961L1035.13 376.618L1034.8 376.276L982.672 320.793L997.897 304.59L1066 376.162Z"
                fill="#E6E6E6"
                stroke="black"
              />
              <path
                id="Vector_26"
                d="M859.513 376.276L859.192 376.618L859.513 376.961L911.217 431.987L896.423 447.732L828.321 376.162L896.423 304.59L911.646 320.793L859.513 376.276Z"
                fill="#CD63FF"
                stroke="black"
              />
              <path
                id="Vector_27"
                d="M1066 376.162L997.897 447.732L983.102 431.987L1034.8 376.961L1035.13 376.618L1034.8 376.276L982.672 320.793L997.897 304.59L1066 376.162Z"
                fill="#CD63FF"
                stroke="black"
              />
            </g>
            <path
              ref={leafProgRef}
              className="leaf-prog-2"
              d="M847.036 941.744C847.03 941.773 847.025 941.802 847.02 941.828C847.002 941.827 846.984 941.825 846.966 941.823C846.639 941.793 846.155 941.744 845.53 941.671C844.282 941.524 842.471 941.281 840.231 940.894C835.75 940.119 829.553 938.77 822.69 936.471C808.954 931.871 792.61 923.488 781.994 908.358C771.376 893.224 768.463 874.152 768.22 858.817C768.098 851.156 768.643 844.444 769.219 839.648C769.507 837.25 769.802 835.332 770.025 834.015C770.136 833.357 770.23 832.848 770.295 832.505C770.301 832.476 770.306 832.448 770.311 832.421C770.329 832.423 770.347 832.424 770.366 832.426C770.693 832.457 771.177 832.506 771.801 832.579C773.05 832.725 774.86 832.969 777.1 833.356C781.581 834.13 787.779 835.48 794.642 837.778C808.377 842.378 824.722 850.761 835.337 865.891C845.956 881.026 848.869 900.097 849.112 915.433C849.233 923.094 848.688 929.805 848.112 934.601C847.825 936.999 847.529 938.917 847.306 940.234C847.195 940.893 847.101 941.401 847.036 941.744Z"
              fill="#66BB31"
              stroke="black"
            />
            <path
              className="leaf-prog-1"
              d="M890.218 919.827C883.243 929.769 872.497 935.285 863.45 938.315C858.931 939.828 854.85 940.716 851.9 941.226C850.425 941.481 849.233 941.641 848.412 941.738C848.071 941.778 847.794 941.807 847.587 941.827C847.546 941.607 847.491 941.306 847.428 940.93C847.281 940.064 847.086 938.801 846.897 937.222C846.518 934.063 846.159 929.642 846.239 924.596C846.399 914.491 848.319 901.946 855.297 892C862.273 882.058 873.019 876.542 882.066 873.512C886.585 871.999 890.665 871.111 893.616 870.601C895.091 870.346 896.282 870.186 897.104 870.089C897.444 870.049 897.722 870.02 897.929 870C897.97 870.22 898.024 870.521 898.088 870.896C898.235 871.763 898.429 873.026 898.619 874.605C898.998 877.764 899.357 882.185 899.277 887.231C899.117 897.337 897.197 909.881 890.218 919.827Z"
              fill="#1B7B47"
              stroke="black"
            />
            <path
              className="floor-programming"
              d="M1126.05 942.595H83V946H1126.05V942.595Z"
              fill="#CECAFA"
            />
            <g ref={boyProgRef} className="boy-prog" clip-path="url(#clip0)">
              <path
                id="Vector_28"
                d="M217.136 923.383H234.495L242.755 852.121L217.133 852.123L217.136 923.383Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_29"
                d="M212.709 941.292L268.684 941.29V940.537C268.684 934.387 266.387 928.489 262.302 924.141C258.217 919.794 252.675 917.35 246.896 917.35H246.895L212.708 917.351L212.709 941.292Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_30"
                d="M303.02 923.383H320.379L328.637 852.121L303.017 852.123L303.02 923.383Z"
                fill="#FFB6B6"
              />
              <path
                id="Vector_31"
                d="M298.593 941.292L354.567 941.29V940.537C354.567 934.387 352.271 928.489 348.186 924.141C344.1 919.794 338.559 917.35 332.78 917.35H332.779L298.592 917.351L298.593 941.292Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_32"
                d="M291.982 752.704L292.002 752.768L292.005 752.835L298.743 901.511H331.233L339.854 743.456L322.603 560.262C322.404 560.269 322.144 560.278 321.826 560.289C321.011 560.317 319.815 560.361 318.29 560.419C315.239 560.535 310.871 560.71 305.602 560.947C295.064 561.421 280.926 562.143 266.521 563.133C252.115 564.123 237.45 565.381 225.856 566.926C220.058 567.699 215.039 568.543 211.209 569.458C209.294 569.915 207.686 570.389 206.433 570.875C205.165 571.368 204.311 571.855 203.853 572.314C202.885 573.285 202.042 575.202 201.342 577.932C200.649 580.636 200.118 584.051 199.718 587.928C198.92 595.68 198.654 605.226 198.655 614.517C198.656 623.805 198.924 632.826 199.193 639.527C199.327 642.876 199.461 645.646 199.561 647.577C199.611 648.543 199.653 649.299 199.682 649.813C199.697 650.071 199.709 650.268 199.716 650.4L199.725 650.55L199.728 650.588L199.728 650.597L199.728 650.6C199.728 650.6 199.728 650.6 199.229 650.631L199.728 650.6L199.729 650.606L212.329 900.669L249.399 898.843V796.984V796.953L249.403 796.923L264.711 671.236L265.683 671.143L291.982 752.704Z"
                fill="#953A3A"
                stroke="black"
              />
              <g ref={boyArmProgRef} className="arm-boy">
                <path
                  id="Vector_33"
                  d="M420.19 466.579C419.268 468.454 417.972 470.089 416.391 471.373C414.811 472.656 412.986 473.555 411.044 474.005C409.102 474.457 407.091 474.449 405.152 473.985C403.214 473.519 401.394 472.606 399.822 471.312L359.359 499.408L359.482 472.688L397.888 450.104C400.107 447.439 403.168 445.731 406.49 445.306C409.812 444.881 413.166 445.769 415.915 447.799C418.664 449.831 420.617 452.864 421.405 456.326C422.193 459.785 421.761 463.435 420.19 466.579H420.19Z"
                  fill="#FFB6B6"
                />
                <path
                  id="Vector_34"
                  d="M389.545 483.729L332.018 519.723L284.084 451.485V408.684C284.081 404.728 285.179 400.86 287.242 397.569C289.144 394.527 291.79 392.096 294.894 390.538C297.999 388.98 301.445 388.354 304.859 388.727C308.274 389.1 311.528 390.458 314.271 392.655C317.013 394.852 319.14 397.804 320.422 401.193L345.316 467.019L380.624 455.916L389.545 483.729Z"
                  fill="#A4D9BF"
                />
              </g>
              <g className="body-boy">
                <path
                  id="Vector_35"
                  d="M175.569 393.987L210.529 379.98L216.682 366.702L260.635 367.381L270.593 378.029L304.818 389.96L326.579 567.393C326.579 567.393 259.596 618.341 200.138 583.139L175.569 393.987Z"
                  fill="#A4D9BF"
                />
                <path
                  id="Vector_36"
                  d="M222.378 579.72C222.029 577.638 221.254 575.663 220.108 573.935C218.963 572.205 217.476 570.764 215.751 569.713C214.028 568.661 212.107 568.026 210.127 567.851C208.145 567.674 206.153 567.963 204.288 568.694L173.625 528.96L166.2 554.484L196.456 588.303C197.82 591.556 200.256 594.163 203.305 595.631C206.355 597.098 209.804 597.324 212.999 596.266C216.195 595.209 218.914 592.94 220.642 589.89C222.372 586.84 222.989 583.223 222.378 579.72Z"
                  fill="#FCE0E0"
                />
                <path
                  id="Vector_37"
                  d="M176.643 573.464L196.02 552.841L164.02 491.818L210.431 436.456L207.751 414.12C207.135 408.978 205.2 404.116 202.158 400.068C199.513 396.547 196.115 393.752 192.246 391.915C188.379 390.079 184.155 389.255 179.925 389.512C175.698 389.769 171.589 391.1 167.941 393.394C164.296 395.687 161.218 398.877 158.968 402.695L122.681 488.567L122.862 488.853L176.643 573.464Z"
                  fill="#A4D9BF"
                />
              </g>
              <path
                className="face-boy"
                d="M265.25 284.067L265.25 284.067C257.483 277.977 247.782 275.384 238.242 276.841C228.701 278.297 220.07 283.688 214.219 291.862L214.219 291.862C208.366 300.038 205.765 310.339 206.983 320.544L207.041 321.027L207.036 321.028C208.459 331.127 213.53 340.237 221.167 346.413C228.928 352.687 238.705 355.421 248.351 354.024C257.998 352.626 266.737 347.209 272.644 338.95L273.051 339.241L272.644 338.95C278.552 330.69 281.139 320.266 279.831 309.971C279.831 309.971 279.831 309.97 279.831 309.97L279.76 309.413C278.233 299.258 273.019 290.157 265.25 284.067Z"
                fill="#FCE0E0"
                stroke="black"
              />
              <g ref={boyHairProgRef} className="hair-boy">
                <mask id="path-43-inside-1" fill="white">
                  <path d="M215.96 341.033C214.047 336.896 212.08 332.454 212.619 327.878C213.156 323.302 217.372 318.928 221.512 320.288C223.988 321.101 225.86 323.703 228.448 323.837C232.009 324.02 234.051 319.682 235.159 316.076L239.673 301.389C244.009 304.985 249.035 307.517 254.396 308.807C259.758 310.096 265.318 310.11 270.685 308.847C274.877 307.827 279.111 305.839 281.569 302.085C284.028 298.332 284.013 292.509 280.641 289.67C278.988 288.278 276.787 287.75 275.207 286.264C274.226 285.343 273.551 284.111 273.279 282.749C273.009 281.387 273.158 279.969 273.702 278.704C274.249 277.439 275.162 276.395 276.309 275.725C277.455 275.056 278.774 274.797 280.069 274.987L268.703 273.475L272.089 266.956C270.802 267.889 269.346 268.525 267.815 268.824C266.283 269.123 264.71 269.078 263.196 268.693C260.138 268.107 257.256 266.767 254.265 265.873C247.014 263.903 239.357 264.505 232.456 267.589C225.556 270.672 219.79 276.069 216.035 282.959C213.238 281.965 210.223 281.899 207.389 282.769C204.557 283.64 202.039 285.406 200.17 287.834C197.127 291.944 196.3 297.429 196.182 302.66C195.96 312.974 198.074 323.193 202.342 332.456C203.567 335.397 205.326 338.053 207.518 340.269C208.623 341.368 209.938 342.196 211.375 342.696C212.812 343.196 214.333 343.355 215.834 343.163" />
                </mask>
                <path
                  d="M215.96 341.033C214.047 336.896 212.08 332.454 212.619 327.878C213.156 323.302 217.372 318.928 221.512 320.288C223.988 321.101 225.86 323.703 228.448 323.837C232.009 324.02 234.051 319.682 235.159 316.076L239.673 301.389C244.009 304.985 249.035 307.517 254.396 308.807C259.758 310.096 265.318 310.11 270.685 308.847C274.877 307.827 279.111 305.839 281.569 302.085C284.028 298.332 284.013 292.509 280.641 289.67C278.988 288.278 276.787 287.75 275.207 286.264C274.226 285.343 273.551 284.111 273.279 282.749C273.009 281.387 273.158 279.969 273.702 278.704C274.249 277.439 275.162 276.395 276.309 275.725C277.455 275.056 278.774 274.797 280.069 274.987L268.703 273.475L272.089 266.956C270.802 267.889 269.346 268.525 267.815 268.824C266.283 269.123 264.71 269.078 263.196 268.693C260.138 268.107 257.256 266.767 254.265 265.873C247.014 263.903 239.357 264.505 232.456 267.589C225.556 270.672 219.79 276.069 216.035 282.959C213.238 281.965 210.223 281.899 207.389 282.769C204.557 283.64 202.039 285.406 200.17 287.834C197.127 291.944 196.3 297.429 196.182 302.66C195.96 312.974 198.074 323.193 202.342 332.456C203.567 335.397 205.326 338.053 207.518 340.269C208.623 341.368 209.938 342.196 211.375 342.696C212.812 343.196 214.333 343.355 215.834 343.163"
                  fill="#735151"
                />
                <path
                  d="M212.619 327.878L213.612 327.995L213.612 327.995L212.619 327.878ZM221.512 320.288L221.2 321.238L221.2 321.238L221.512 320.288ZM228.448 323.837L228.396 324.835H228.396L228.448 323.837ZM235.159 316.076L234.203 315.783L234.203 315.782L235.159 316.076ZM239.673 301.389L238.717 301.095L239.157 299.663L240.311 300.619L239.673 301.389ZM254.396 308.807L254.162 309.779L254.162 309.779L254.396 308.807ZM270.685 308.847L270.921 309.819L270.914 309.821L270.685 308.847ZM281.569 302.085L280.733 301.537L280.733 301.537L281.569 302.085ZM280.641 289.67L281.285 288.905L281.285 288.905L280.641 289.67ZM275.207 286.264L275.891 285.536L275.892 285.536L275.207 286.264ZM273.279 282.749L272.299 282.945L272.299 282.943L273.279 282.749ZM273.702 278.704L272.784 278.308L272.784 278.308L273.702 278.704ZM276.309 275.725L276.813 276.589L276.813 276.589L276.309 275.725ZM280.069 274.987L280.214 273.997L279.937 275.978L280.069 274.987ZM268.703 273.475L268.571 274.466L267.159 274.278L267.815 273.014L268.703 273.475ZM272.089 266.956L271.502 266.147L272.976 267.417L272.089 266.956ZM267.815 268.824L268.007 269.805L268.007 269.805L267.815 268.824ZM263.196 268.693L263.384 267.711L263.413 267.716L263.442 267.724L263.196 268.693ZM254.265 265.873L254.527 264.908L254.539 264.912L254.551 264.915L254.265 265.873ZM232.456 267.589L232.048 266.676L232.048 266.676L232.456 267.589ZM216.035 282.959L216.913 283.437L216.504 284.187L215.7 283.901L216.035 282.959ZM207.389 282.769L207.095 281.813L207.096 281.813L207.389 282.769ZM200.17 287.834L199.367 287.239L199.372 287.231L199.378 287.224L200.17 287.834ZM196.182 302.66L195.182 302.638L195.182 302.637L196.182 302.66ZM202.342 332.456L203.25 332.037L203.258 332.054L203.265 332.071L202.342 332.456ZM207.518 340.269L206.813 340.978L206.808 340.972L207.518 340.269ZM211.375 342.696L211.046 343.64L211.046 343.64L211.375 342.696ZM215.053 341.453C213.159 337.358 211.049 332.661 211.626 327.761L213.612 327.995C213.111 332.246 214.935 336.434 216.868 340.613L215.053 341.453ZM211.626 327.761C211.923 325.228 213.229 322.772 215.04 321.119C216.854 319.463 219.308 318.512 221.824 319.338L221.2 321.238C219.576 320.705 217.852 321.26 216.389 322.596C214.923 323.933 213.852 325.952 213.612 327.995L211.626 327.761ZM221.824 319.338C223.241 319.804 224.487 320.783 225.511 321.498C226.613 322.267 227.519 322.787 228.499 322.838L228.396 324.835C226.789 324.753 225.465 323.905 224.366 323.137C223.188 322.315 222.259 321.586 221.2 321.238L221.824 319.338ZM228.499 322.838C229.797 322.905 230.915 322.171 231.913 320.791C232.912 319.411 233.661 317.548 234.203 315.783L236.115 316.37C235.549 318.211 234.723 320.319 233.534 321.964C232.344 323.608 230.66 324.952 228.396 324.835L228.499 322.838ZM234.203 315.782L238.717 301.095L240.629 301.683L236.115 316.37L234.203 315.782ZM240.311 300.619C244.532 304.12 249.421 306.582 254.63 307.834L254.162 309.779C248.65 308.453 243.486 305.85 239.035 302.159L240.311 300.619ZM254.63 307.834C259.839 309.087 265.242 309.1 270.456 307.874L270.914 309.821C265.395 311.119 259.676 311.105 254.162 309.779L254.63 307.834ZM270.448 307.876C274.533 306.882 278.476 304.983 280.733 301.537L282.406 302.633C279.746 306.695 275.22 308.773 270.921 309.819L270.448 307.876ZM280.733 301.537C281.839 299.848 282.401 297.667 282.293 295.586C282.185 293.505 281.418 291.632 279.997 290.435L281.285 288.905C283.236 290.547 284.162 293.004 284.29 295.483C284.419 297.962 283.758 300.568 282.406 302.633L280.733 301.537ZM279.997 290.435C279.274 289.827 278.422 289.398 277.438 288.891C276.493 288.404 275.427 287.844 274.522 286.993L275.892 285.536C276.566 286.17 277.391 286.617 278.354 287.113C279.28 287.59 280.355 288.122 281.285 288.905L279.997 290.435ZM274.522 286.993C273.385 285.924 272.61 284.503 272.299 282.945L274.26 282.553C274.492 283.718 275.068 284.762 275.891 285.536L274.522 286.993ZM272.299 282.943C271.989 281.385 272.159 279.761 272.784 278.308L274.621 279.1C274.157 280.177 274.029 281.39 274.26 282.554L272.299 282.943ZM272.784 278.308C273.412 276.855 274.466 275.643 275.804 274.862L276.813 276.589C275.858 277.146 275.086 278.023 274.621 279.101L272.784 278.308ZM275.804 274.862C277.144 274.079 278.691 273.774 280.214 273.997L279.924 275.976C278.856 275.82 277.766 276.032 276.813 276.589L275.804 274.862ZM279.937 275.978L268.571 274.466L268.835 272.484L280.201 273.996L279.937 275.978ZM267.815 273.014L271.201 266.495L272.976 267.417L269.59 273.936L267.815 273.014ZM272.676 267.766C271.273 268.782 269.683 269.478 268.007 269.805L267.623 267.842C269.009 267.572 270.331 266.995 271.502 266.147L272.676 267.766ZM268.007 269.805C266.329 270.133 264.606 270.084 262.949 269.662L263.442 267.724C264.813 268.073 266.237 268.113 267.624 267.842L268.007 269.805ZM263.007 269.675C261.402 269.367 259.86 268.865 258.373 268.342C256.865 267.811 255.444 267.269 253.979 266.831L254.551 264.915C256.078 265.371 257.592 265.946 259.037 266.455C260.504 266.972 261.931 267.432 263.384 267.711L263.007 269.675ZM254.003 266.838C246.975 264.928 239.555 265.511 232.864 268.502L232.048 266.676C239.158 263.498 247.052 262.877 254.527 264.908L254.003 266.838ZM232.864 268.502C226.172 271.492 220.568 276.732 216.913 283.437L215.157 282.48C219.013 275.406 224.94 269.852 232.048 266.676L232.864 268.502ZM215.7 283.901C213.105 282.979 210.311 282.918 207.683 283.725L207.096 281.813C210.135 280.879 213.371 280.95 216.37 282.016L215.7 283.901ZM207.683 283.725C205.056 284.533 202.71 286.174 200.963 288.444L199.378 287.224C201.369 284.638 204.058 282.747 207.095 281.813L207.683 283.725ZM200.974 288.429C198.122 292.281 197.299 297.501 197.181 302.682L195.182 302.637C195.302 297.356 196.132 291.607 199.367 287.239L200.974 288.429ZM197.181 302.681C196.963 312.845 199.047 322.914 203.25 332.037L201.434 332.874C197.102 323.472 194.958 313.102 195.182 302.638L197.181 302.681ZM203.265 332.071C204.442 334.897 206.129 337.443 208.229 339.566L206.808 340.972C204.522 338.663 202.692 335.898 201.419 332.84L203.265 332.071ZM208.224 339.56C209.225 340.556 210.412 341.302 211.704 341.752L211.046 343.64C209.464 343.09 208.021 342.179 206.813 340.978L208.224 339.56ZM211.704 341.752C212.995 342.201 214.361 342.344 215.707 342.171L215.961 344.155C214.306 344.367 212.629 344.191 211.046 343.64L211.704 341.752Z"
                  fill="black"
                  mask="url(#path-43-inside-1)"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="301.343"
              height="677.749"
              fill="white"
              transform="matrix(-1 0 0 1 422.938 264.017)"
            />
          </clipPath>
        </defs>
      </svg>
      <div ref={paraRef} className="description--journey-three">
        <span className="para-three">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </span>
        <span className="para-three">
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </span>
      </div>
    </div>
  );
}

export default ProgrammingComponent;
