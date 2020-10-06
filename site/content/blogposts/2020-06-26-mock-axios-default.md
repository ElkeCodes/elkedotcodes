---
slug: "mock-axios-default"
type: "tech tidbit"
date: 2020-07-21
title: "Mock axios default"
excerpt: ""
icon: 🙅
published: false
---

jest.mock("axios", () => ({
	__esModule: true,
	default: ({ method, url }) => {
	  if (method === "get" && url === "/assets/cities.json") {
		return Promise.resolve({
		  data: [
			{
			  id: 1,
			  zip: 1000,
			  name: "Brussel",
			},
		  ],
		});
	  }
	},
  }));