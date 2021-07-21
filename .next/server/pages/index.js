(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/main/body/MainBody.module.scss
var MainBody_module = __webpack_require__(402);
var MainBody_module_default = /*#__PURE__*/__webpack_require__.n(MainBody_module);
// EXTERNAL MODULE: ./components/main/introduce/Introduce.module.scss
var Introduce_module = __webpack_require__(2559);
var Introduce_module_default = /*#__PURE__*/__webpack_require__.n(Introduce_module);
;// CONCATENATED MODULE: ./components/main/introduce/Introduce.tsx




class Introduce extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Introduce_module_default()).Introduce,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Introduce_module_default()).Introduce_Image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "https://sun9-22.userapi.com/impf/c830109/v830109662/d6b1b/B86haq6vdz0.jpg?size=2560x1702&quality=96&sign=5e52ec059e6edbf4e6e5902d0676ebc5&type=album",
          alt: "my photo"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Introduce_module_default()).Introduce_Block,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Introduce_module_default()).Introduce_Block_Top,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["I\u2019m Kirx. A Front-end developer", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Introduce_module_default()).Introduce_Block_Top_Base,
              children: "based in Kazan."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Introduce_module_default()).Introduce_Block_Bottom,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [" ", "I\u2019m probably the most passionate \xABFronter\xBB you will ever get to work with. If you have a great project that needs some amazing skills, I\u2019m your guy."]
          })
        })]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/main/introduce/index.ts

/* harmony default export */ var introduce = (Introduce);
// EXTERNAL MODULE: ./components/main/experience/Experience.module.scss
var Experience_module = __webpack_require__(758);
var Experience_module_default = /*#__PURE__*/__webpack_require__.n(Experience_module);
;// CONCATENATED MODULE: ./components/main/experience/Experience.tsx




class Experience extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Experience_module_default()).Experience,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Experience_module_default()).Experience_Header,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Experience_module_default()).Experience_Header_Title,
          children: "Work experience"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Experience_module_default()).Experience_Header_Content,
          children: "Companies I have worked for in the past."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Experience_module_default()).Experience_Body,
        children: ExperienceItems.map(info => /*#__PURE__*/jsx_runtime_.jsx(ExperienceItem, {
          info: info
        }, info.id))
      })]
    });
  }

}

const ExperienceItem = ({
  info
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Experience_module_default()).Experience_Body_Item,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: (Experience_module_default()).Experience_Body_Item_Number,
      children: ["0", info.id]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Experience_module_default()).Experience_Body_Item_Company,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          color: info.color
        },
        children: info.company
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [", ", info.workType]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Experience_module_default()).Experience_Body_Item_Description,
      children: info.description
    })]
  });
};

const ExperienceItems = [{
  id: 1,
  company: 'Google',
  color: '#3CC74E',
  workType: 'Front-end developer',
  description: 'I currently am the lead designer on the interaction design team for Google Play.'
}, {
  id: 2,
  company: 'FaceBook',
  color: '#609BFF',
  workType: 'Front-end developer',
  description: 'I currently am the lead designer on the interaction design team for Google Play.'
}, {
  id: 3,
  company: 'Dribble',
  color: '#E95D90',
  workType: 'Front-end developer',
  description: 'I currently am the lead designer on the interaction design team for Google Play.'
}];
;// CONCATENATED MODULE: ./components/main/experience/index.ts

/* harmony default export */ var experience = (Experience);
// EXTERNAL MODULE: ./components/main/philosophy/Philosophy.module.scss
var Philosophy_module = __webpack_require__(2156);
var Philosophy_module_default = /*#__PURE__*/__webpack_require__.n(Philosophy_module);
;// CONCATENATED MODULE: ./public/img.png
/* harmony default export */ var img = ({"src":"/_next/static/image/public/img.d82a0d6116ca39fd6b949cc0c09e77fd.png","height":1200,"width":1440,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA6ElEQVR42g3LvU7CUBgG4PfDg5VWMNH4k1giUdTFwcURExfvQBcTJy/C1XhnDq6aNGpNNLUVpRDK36GnP8D5YH2Sh+4fH3jLKuHw+Aie46BWq8JaLSOdaby/vEJskGZzlmPaCbGzvQlkKUajIVS/S6f2Ogu9AHt/j+JBn93gHx+/LZwf7OKsugbZaxLd3d7opUlOjZM6ZwUBL5KwDIHQDyiSigul5SKGY8XTRKHeuMDl9RUq5QrevgOOF0GEnS7aKoeKFRLXgVEUSP0vgIh+2hGLOM0gVUJ+JLn59Azv08WfNohNE7a5QnPEM2wUF+JGPwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/main/philosophy/Philosophy.tsx





class Philosophy extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Philosophy_module_default()).Philosophy,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Philosophy_module_default()).Philosophy_Left,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Philosophy_module_default()).Philosophy_Left_Header,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Philosophy & values"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Philosophy_module_default()).Philosophy_Left_Content,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality."
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Philosophy_module_default()).Philosophy_Left_Link,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "More about me"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Philosophy_module_default()).Philosophy_Right,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: img.src,
          alt: "Philosophy"
        })
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/main/philosophy/index.ts

/* harmony default export */ var philosophy = (Philosophy);
// EXTERNAL MODULE: ./components/main/skillset/Skillset.module.scss
var Skillset_module = __webpack_require__(979);
var Skillset_module_default = /*#__PURE__*/__webpack_require__.n(Skillset_module);
;// CONCATENATED MODULE: ./components/main/skillset/Skillset.tsx




class Skillset extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Skillset_module_default()).Skillset,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Skillset_module_default()).Skillset_Content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Skillset_module_default()).Skillset_Content_Left,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Skillset_module_default()).Skillset_Content_Left_Title,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Skillset"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Skillset_module_default()).Skillset_Content_Left_Description,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Skillset_module_default()).Skillset_Content_Right,
          children: skillsetitems.map(item => /*#__PURE__*/jsx_runtime_.jsx(SkillSetItem, {
            item: item
          }, item.title))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Skillset_module_default()).Skillset_Footer,
        children: skillsetlogos.map(item => /*#__PURE__*/jsx_runtime_.jsx(SkillSetLogos, {
          item: item
        }, item))
      })]
    });
  }

}

const SkillSetItem = ({
  item
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Skillset_module_default()).Skillset_Content_Right_Item,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Skillset_module_default()).Skillset_Content_Right_Item_Title,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: item.title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Skillset_module_default()).Skillset_Content_Right_Item_Description,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: item.description
      })
    })]
  });
};

const skillsetitems = [{
  title: 'Product Design',
  description: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
}, {
  title: 'Visual Design',
  description: 'My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.'
}, {
  title: 'Motion Design',
  description: 'I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. '
}, {
  title: 'Photography',
  description: 'Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.'
}];

const SkillSetLogos = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Skillset_module_default()).Skillset_Footer_Item,
    children: item
  });
};

const skillsetlogos = ['CBRE', 'EPIQ', 'Fast', 'Linux', 'SMTH', 'ELSE'];
;// CONCATENATED MODULE: ./components/main/skillset/index.ts

/* harmony default export */ var skillset = (Skillset);
// EXTERNAL MODULE: ./components/main/posts/Posts.module.scss
var Posts_module = __webpack_require__(1608);
var Posts_module_default = /*#__PURE__*/__webpack_require__.n(Posts_module);
;// CONCATENATED MODULE: ./public/post1.png
/* harmony default export */ var post1 = ({"src":"/_next/static/image/public/post1.6dc1f9e8b70371b84020b6dbcd5e0e16.png","height":1238,"width":1272,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42iXHT0uDABzG8efZdObSWaIMHIyo2LVddqlDb6tj3YPOO1RvonsE0a0a0Z8hBMEICrecqaRz+UvoC5/Dl8dHB2XLMtHf3cdgsIf/pEJeXl+Jcju6R9fbgrsZwJqMoHGJh5c3aCbgPz+hFgUJbW+dTmcF8VfGcKay1+1DogYeQ5e17Y22OJYtat1Gmcfy8X4jaZ5h/BrI8ORc6jtr4WFp9oifEqKqXFJn2+kgjuac3l2Qp2dDyYocn0EkKEpS0bGYTsRwPXKRQPHHvjSbDaTzb2RxLCK/SNIC2ixAEoVCAGWFFTFsu5oaTF1FWhRsrRryB4szbwebVblaAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/post2.png
/* harmony default export */ var post2 = ({"src":"/_next/static/image/public/post2.d1e9337dd0cac5a784aa9beaabfb2578.png","height":1238,"width":1272,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42gVATS/DYBz//Z+2WTR1YRGsJ9mDeKmZEAcnevUdJIREuDo5+BgObuLQjCw7SPgCJLJoHFoJSZM5KNa1XZU1sfQR8t+7ucQkCJFjfcPEweE2dvd2ULMuKYwiIecgZL0Mtt2E4z6gHW+i6d6BcwOKooFJJCgI2nRVr8OybmiaG9S4PUfOVDBZI/r049zzPBSIQZ+YQdiJcH16DJmvgZRBSHpJP2nULihLf8FnF6jPCqT+9SF9PZEyPkLs0b4HX5xDp2UjaH1gQNIwNlVBL/3GZLkMuVgcEj9JAm1Ux5vnCPvFhRo4ePVDbK0sCzmMUpjmKlWrS6KbxDg72kdJG8ZzxmDMV/APuUlpCjBql2IAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/post3.png
/* harmony default export */ var post3 = ({"src":"/_next/static/image/public/post3.345492c4004949a032f1fd61da89b8c5.png","height":1238,"width":1272,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3ElEQVR42g3LPU7DQBQA4Xm765/YjuSAEBREoBQcAlo6bkKBuB8FJRUSHR1VKAAljogtsL27L66mmU8eH+6jBk9d16RWMQqa5GBTuVhdqSuKkuNFTW9znoYjtkG5NQ1n2vD+9opbXq7EaKBUq8/VqZBmXH/tNVFLPpuJszbVeW6Jvw3n0umyMMzFk4hTxWPGqHJSFbLf/rCWXl7CnyQOBCsgYrz3ZEnCerOBQiEb2eEZRk/UiLNTQtvA7pu7zw+VssK0LV1gmgZ1ixSs9uL/R71pOmw36ai0Q4/3ngOlQGhwpADnoQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/post4.png
/* harmony default export */ var post4 = ({"src":"/_next/static/image/public/post4.8c51e7fd40a6c56ff4527fa68ea5d3d7.png","height":1238,"width":1272,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42g3LMUvDQACG4e+7Sy6NiKW6aVoLQcEf4ORP8Ge6Cu5dRAddRChu6iA4iBU0tiC5u1w+A+/4PpwdTvvoW3z9fIOZQ0FiZDPQZBxPJuLi+q5vvUcXAtBrqEdMAduFY07IzOcznhwfDSzHxe2CW3tj1nWN/ekBqqqiMYQsJLu7gytstEp/yiGEEJS5XHz/WCnGiDZ4NU3DcuRQ2EwheJZFATbrjQyI1EWFGOmDx/q3UUo9BcHY4V6+PuvmaYkESD10+XCPx7cXGFKZAdBY8BNJlkRnDM5Pz+AIlM7hHxtcbdy2UBfTAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/main/posts/Posts.tsx








class Posts extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Posts_module_default()).Posts,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Posts_module_default()).Posts_Header,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Posts_module_default()).Posts_Header_Title,
          children: "My projects"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Posts_module_default()).Posts_Header_Description,
          children: "Work that I\u2019ve done for the past 8 years"
        })]
      }), posts.map(item => /*#__PURE__*/jsx_runtime_.jsx(Post, {
        item: item
      }, item.id)), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Posts_module_default()).Posts_Button,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "VIEW ALL PROJECTS"
        })
      })]
    });
  }

}

const Post = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Posts_module_default()).Posts_Item,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Posts_module_default()).Posts_Item_Container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Posts_module_default()).Posts_Item_Container_Image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: item.img.src,
          alt: "post"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Posts_module_default()).Posts_Item_Container_Text,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Posts_module_default()).Posts_Item_Container_Text_Title,
          children: item.title
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Posts_module_default()).Posts_Item_Container_Text_Description,
          children: item.description
        })]
      })]
    })
  });
};

const posts = [{
  id: 1,
  img: post1,
  title: "Restaurant Website Design",
  description: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
}, {
  id: 2,
  img: post2,
  title: "Mobile Dashboard",
  description: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
}, {
  id: 3,
  img: post3,
  title: "CoinView Mobile App Design",
  description: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
}, {
  id: 4,
  img: post4,
  title: "T-Box Mobile Design",
  description: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
}];
;// CONCATENATED MODULE: ./components/main/posts/index.ts

/* harmony default export */ var main_posts = (Posts);
;// CONCATENATED MODULE: ./components/main/body/MainBody.tsx









class MainBody extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (MainBody_module_default()).MainBody,
      children: [/*#__PURE__*/jsx_runtime_.jsx(introduce, {}), /*#__PURE__*/jsx_runtime_.jsx(experience, {}), /*#__PURE__*/jsx_runtime_.jsx(philosophy, {}), /*#__PURE__*/jsx_runtime_.jsx(skillset, {}), /*#__PURE__*/jsx_runtime_.jsx(main_posts, {})]
    });
  }

}
;// CONCATENATED MODULE: ./components/main/body/index.ts

/* harmony default export */ var body = (MainBody);
;// CONCATENATED MODULE: ./pages/index.tsx



class Home extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(body, {});
  }

}

/***/ }),

/***/ 402:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "MainBody_Font__1Qqq8",
	"Label1": "MainBody_Label1__20e2e",
	"Heading1": "MainBody_Heading1__7uMtj",
	"Heading2": "MainBody_Heading2__3nxOj",
	"Heading3": "MainBody_Heading3__3CfjD",
	"Heading4": "MainBody_Heading4__25Qh_",
	"Heading5": "MainBody_Heading5__3x_Ni",
	"Body1": "MainBody_Body1__22hGY",
	"Body2": "MainBody_Body2__1zQRp",
	"Overline": "MainBody_Overline__1FKsN",
	"Button": "MainBody_Button__1h1OY",
	"MainBody": "MainBody_MainBody__2o_4P"
};


/***/ }),

/***/ 758:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Experience_Font__3Pltz",
	"Label1": "Experience_Label1__2F5Kp",
	"Experience_Body_Item_Number": "Experience_Experience_Body_Item_Number__1L3Ai",
	"Heading1": "Experience_Heading1__3mUAY",
	"Heading2": "Experience_Heading2__1xq5B",
	"Experience_Header_Content": "Experience_Experience_Header_Content__1cbxH",
	"Heading3": "Experience_Heading3__3aKMB",
	"Experience_Body_Item_Company": "Experience_Experience_Body_Item_Company__1XMRK",
	"Heading4": "Experience_Heading4__1P6Ow",
	"Heading5": "Experience_Heading5__3rFSn",
	"Experience_Header_Title": "Experience_Experience_Header_Title__2NDn1",
	"Body1": "Experience_Body1__2awQJ",
	"Body2": "Experience_Body2__1M3P-",
	"Experience_Body_Item_Description": "Experience_Experience_Body_Item_Description__1ZJUr",
	"Overline": "Experience_Overline__3Go9p",
	"Button": "Experience_Button__1Mdvg",
	"Experience": "Experience_Experience__12WqA",
	"Experience_Header": "Experience_Experience_Header__31n19",
	"Experience_Body": "Experience_Experience_Body__3ohN2",
	"Experience_Body_Item": "Experience_Experience_Body_Item__vfmni"
};


/***/ }),

/***/ 2559:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Introduce_Font__6Txaw",
	"Label1": "Introduce_Label1__1iIsy",
	"Heading1": "Introduce_Heading1__3-MG0",
	"Introduce_Block_Top": "Introduce_Introduce_Block_Top__i_T-p",
	"Heading2": "Introduce_Heading2__1ftZ9",
	"Heading3": "Introduce_Heading3__3Qf0-",
	"Heading4": "Introduce_Heading4__M3aIT",
	"Introduce_Block_Bottom": "Introduce_Introduce_Block_Bottom__1VqlU",
	"Heading5": "Introduce_Heading5__1Mevh",
	"Body1": "Introduce_Body1__hh6UY",
	"Body2": "Introduce_Body2__3jrV1",
	"Overline": "Introduce_Overline__1MCAs",
	"Button": "Introduce_Button__3Dbib",
	"Introduce": "Introduce_Introduce__3Ux8q",
	"Introduce_Image": "Introduce_Introduce_Image__2bQxk",
	"Introduce_Block": "Introduce_Introduce_Block__3UKlv",
	"Introduce_Block_Top_Base": "Introduce_Introduce_Block_Top_Base__2IHtC"
};


/***/ }),

/***/ 2156:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Philosophy_Font__eK8_M",
	"Label1": "Philosophy_Label1__1GPtw",
	"Heading1": "Philosophy_Heading1__2gzrl",
	"Heading2": "Philosophy_Heading2__1L11R",
	"Philosophy_Left_Header": "Philosophy_Philosophy_Left_Header__1qpwH",
	"Heading3": "Philosophy_Heading3__3Rw67",
	"Heading4": "Philosophy_Heading4__3fWUy",
	"Heading5": "Philosophy_Heading5__rexzu",
	"Philosophy_Left_Content": "Philosophy_Philosophy_Left_Content__MSkt5",
	"Philosophy_Left_Link": "Philosophy_Philosophy_Left_Link__1qUeH",
	"Body1": "Philosophy_Body1__3AUXb",
	"Body2": "Philosophy_Body2__2J6Al",
	"Overline": "Philosophy_Overline__33o1T",
	"Button": "Philosophy_Button__2HyVr",
	"Philosophy": "Philosophy_Philosophy__23-Lx",
	"Philosophy_Left": "Philosophy_Philosophy_Left__1A22C",
	"Philosophy_Right": "Philosophy_Philosophy_Right__6eJaX"
};


/***/ }),

/***/ 1608:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Posts_Font__2yjI2",
	"Label1": "Posts_Label1__1kA9Y",
	"Heading1": "Posts_Heading1__3NTYy",
	"Heading2": "Posts_Heading2__2fOuq",
	"Posts_Header_Description": "Posts_Posts_Header_Description__3N3u9",
	"Heading3": "Posts_Heading3__2MzYP",
	"Posts_Item_Container_Text_Title": "Posts_Posts_Item_Container_Text_Title__zYT7v",
	"Heading4": "Posts_Heading4__2u9Zk",
	"Posts_Button": "Posts_Posts_Button__1wmt1",
	"Heading5": "Posts_Heading5__2OZ01",
	"Posts_Header_Title": "Posts_Posts_Header_Title__3DpF8",
	"Body1": "Posts_Body1__2axP0",
	"Posts_Item_Container_Text_Description": "Posts_Posts_Item_Container_Text_Description__2HWIk",
	"Body2": "Posts_Body2__2cDAr",
	"Overline": "Posts_Overline__3mvsL",
	"Button": "Posts_Button__3AwHw",
	"Posts": "Posts_Posts__19Riz",
	"Posts_Header": "Posts_Posts_Header__3q6IP",
	"Posts_Item": "Posts_Posts_Item__-ngyv",
	"Posts_Item_Container": "Posts_Posts_Item_Container__1fqqH",
	"Posts_Item_Container_Image": "Posts_Posts_Item_Container_Image__2018p",
	"Posts_Item_Container_Text": "Posts_Posts_Item_Container_Text__1f04r"
};


/***/ }),

/***/ 979:
/***/ (function(module) {

// Exports
module.exports = {
	"Font": "Skillset_Font__3ZmNz",
	"Label1": "Skillset_Label1__Q_RYN",
	"Heading1": "Skillset_Heading1__1AdvG",
	"Heading2": "Skillset_Heading2__659HE",
	"Skillset_Content_Left_Title": "Skillset_Skillset_Content_Left_Title__Gi0VU",
	"Heading3": "Skillset_Heading3__1Z_YX",
	"Skillset_Content_Right_Item_Title": "Skillset_Skillset_Content_Right_Item_Title__WWJFT",
	"Heading4": "Skillset_Heading4__1wO0V",
	"Heading5": "Skillset_Heading5__2kstE",
	"Body1": "Skillset_Body1__2kQQT",
	"Skillset_Content_Left_Description": "Skillset_Skillset_Content_Left_Description__106Y1",
	"Body2": "Skillset_Body2__25x3w",
	"Skillset_Content_Right_Item_Description": "Skillset_Skillset_Content_Right_Item_Description__LaQSz",
	"Overline": "Skillset_Overline__4JQ1T",
	"Button": "Skillset_Button__fwNJk",
	"Skillset_Footer_Item": "Skillset_Skillset_Footer_Item__2cxht",
	"Skillset": "Skillset_Skillset__2KDnR",
	"Skillset_Content": "Skillset_Skillset_Content__2uB2a",
	"Skillset_Content_Left": "Skillset_Skillset_Content_Left__23J1e",
	"Skillset_Content_Right": "Skillset_Skillset_Content_Right__1FZGo",
	"Skillset_Content_Right_Item": "Skillset_Skillset_Content_Right_Item__1hhsp",
	"Skillset_Footer": "Skillset_Skillset_Footer__J_qpz"
};


/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5643));
module.exports = __webpack_exports__;

})();