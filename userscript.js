// ==UserScript==
// @name         AI Dataset Collector
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Capture conversations with chatbots (ChatGPT, Claude, Gemini) and export them in JSONL.
// @author       MULOOOOO
// @match        https://chatgpt.com/*
// @match        https://gemini.google.com/*
// @match        https://claude.ai/*
// @downloadURL  https://github.com/Mulooooo/ai-dataset-collector/blob/main/userscript.js
// @updateURL    https://github.com/Mulooooo/ai-dataset-collector/blob/main/userscript.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_registerMenuCommand
// @icon         data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjIuNzM5MDgiIGhlaWdodD0iMjIyLjczOTA4IiB2aWV3Qm94PSIwLDAsMjIyLjczOTA4LDIyMi43MzkwOCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxODEuOTQ2NzMiIHkxPSIxMTMuNjI1OTIiIHgyPSIxODEuOTQ2NzMiIHkyPSIxNTUuNTUzMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzJkZGY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmZiZmYyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE4MS45MzMxOSIgeTE9IjIwMy45MTkzOSIgeDI9IjE4MS45MzMxOSIgeTI9IjI0NS44NDY3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3YzdiZTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3YjVhY2IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQ0LjAxOTYyIiB5MT0iMjE0LjY4ODk1IiB4Mj0iMjQ0LjAxOTYyIiB5Mj0iMjU5Ljc0NjM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdlNjhkNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdhNTNjNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDQuMTU1ODgiIHkxPSIxNzUuMDE0NTUiIHgyPSIyNDQuMTU1ODgiIHkyPSIyMjAuMDcxOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2I5NGYwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2Q2ZGRhIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI0My45MzE4NSIgeTE9IjEzNS41MjAyOCIgeDI9IjI0My45MzE4NSIgeTI9IjE4MC41Nzc2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci01Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZWI3ZWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MTlhZjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQzLjI5OTI4IiB5MT0iMTAwLjEyNjY2IiB4Mj0iMjQzLjI5OTI4IiB5Mj0iMTQ5LjE0NzExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzczZTdmNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZmYmZmMiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTguMDIxNTUiIHkxPSIxMDEuMTY3NzEiIHgyPSIyMTguMDIxNTUiIHkyPSIxNTIuNzIzMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzNlN2Y0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmZiZmYyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyMC4zMjQ0MyIgeTE9IjEzNi42ODcyMiIgeDI9IjIyOC45OTc5OCIgeTI9IjEzNi42ODcyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci04Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3MmQ4ZjMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2ZmJmZjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTg0LjE4ODk5IiB5MT0iMTU2LjM2ODA1IiB4Mj0iMTg0LjE4ODk5IiB5Mj0iMjAzLjkwMzE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYTlmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjN2RlMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxOTkuMjE0MDQiIHkxPSIxNDIuNTQ1NDUiIHgyPSIxOTkuMjE0MDQiIHkyPSIxNjEuODIyMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYzZmMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcwYTdmMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTguMDA4IiB5MT0iMjA3LjA5MjEzIiB4Mj0iMjE4LjAwOCIgeTI9IjI1OC42NDc0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2Q3OWUxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2E1M2M1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyNC42NDc2NiIgeTE9IjIwOC4wMTg0NyIgeDI9IjIyNC42NDc2NiIgeTI9IjIzOC4wNjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2M3OWUwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2M1ZGNkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE5OS4xMTQ4OSIgeTE9IjE5Ny42NTA1NCIgeDI9IjE5OS4xMTQ4OSIgeTI9IjIxNi45MjcyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2M4MWU1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2M3M2RkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyNC41MDc0IiB5MT0iMTUyLjg2NzY0IiB4Mj0iMjI0LjUwNzQiIHkyPSIyMDcuMDg1NTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYWNmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjNzllMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMjkuMzY0ODYiIHkxPSIxNjIuMTcyNjkiIHgyPSIyMjkuMzY0ODYiIHkyPSIxOTcuNjgxOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYTZmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjODBlNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguNjMwNDYsLTY4LjYzMDQ2KSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTI4LjYzMDQ2LDI5MS4zNjk1NHYtMjIyLjczOTA4aDIyMi43MzkwOHYyMjIuNzM5MDh6IiBmaWxsPSIjMTgxYjIwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMi41Ij48cGF0aCBkPSJNMTY5LjI0MzEsMTU1Ljg5NTc1YzAsMCAtNi40NDYwMSwtMTQuODM4NiA0LjMxMzQyLC0zMC40MjA4NmM5LjE2NDM1LC0xMy4yNzIyIDIzLjQxMTc0LC0xMS43NjYxNSAyMy40MTE3NCwtMTEuNzY2MTVjMCwwIC0xMy44NjY0NSwtMS44MzI0MyAtMjMuMjkxMTksMTEuNzQyMDRjLTExLjczNzksMTYuOTA2MTEgLTQuNDMzOTgsMzAuNDQ0OTcgLTQuNDMzOTgsMzAuNDQ0OTd6IiBzdHJva2U9InVybCgjY29sb3ItMSkiLz48cGF0aCBkPSJNMTY5LjA1ODMzLDIwMy45MTkzOWMwLDAgLTYuMjc0NzksMTQuNDk2MTYgNC40ODQ2NCwzMC4wNzg0MmM5LjE2NDM1LDEzLjI3MjIgMjMuNDExNzQsMTEuNzY2MTUgMjMuNDExNzQsMTEuNzY2MTVjMCwwIC0xMy44NjY0NCwxLjgzMjQ0IC0yMy4yOTExOSwtMTEuNzQyMDRjLTExLjczNzksLTE2LjkwNjExIC00LjYwNTE5LC0zMC4xMDI1NCAtNC42MDUxOSwtMzAuMTAyNTR6IiBzdHJva2U9InVybCgjY29sb3ItMikiLz48cGF0aCBkPSJNMzIyLjAxNjIxLDIzNy4xNDQ2OWMtNi41MDI4OCwyMi43Mjg0NiAtNzMuNjkxNzQsMjIuMjM2ODQgLTczLjY5MTc0LDIyLjIzNjg0bC0wLjA1NDUyLC0zMC42Njc4NmMwLDAgNjYuNTMwODEsMC43MDY4NyA3My42MTYwOSwtMjIuNzE1NmMwLjAwNTc5LC0wLjAxOTQ5IDAuMDg4MTksLTEwLjgwNzk0IDAuMDk5NSwtOS4yMTU5NGMwLjAwMjU0LDAuMzU4NjEgLTAuMDY3NzgsMTIuNDk2NDkgLTAuMDY1MDYsMTIuOTE1NDFjMC4wNTMzNiw4LjIyNDI2IDAuMTM1OCwyNy4zMTM3NCAwLjA5NTczLDI3LjQ0NzE0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTMpIi8+PHBhdGggZD0iTTMyMi4xNTI0NywxOTcuNDcwMjljLTYuNTAyODgsMjIuNzI4NDYgLTczLjY5MTc0LDIyLjIzNjg0IC03My42OTE3NCwyMi4yMzY4NGwtMC4wNTQ1MiwtMzAuNjY3ODZjMCwwIDY2LjUzMDgxLDAuNzA2ODcgNzMuNjE2MDksLTIyLjcxNTYxYzAuMDA1NzksLTAuMDE5NDkgMC4wODgxOSwtMTAuODA3OTQgMC4wOTk0OSwtOS4yMTU5NGMwLjAwMjU0LDAuMzU4NjEgLTAuMDY3NzcsMTIuNDk2NDkgLTAuMDY1MDUsMTIuOTE1NDFjMC4wNTMzNiw4LjIyNDI2IDAuMTM1OCwyNy4zMTM3NSAwLjA5NTczLDI3LjQ0NzE0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTQpIi8+PHBhdGggZD0iTTMyMS45Mjg0NCwxNTcuOTc2MDNjLTYuNTAyODgsMjIuNzI4NDYgLTczLjY5MTc0LDIyLjIzNjg0IC03My42OTE3NCwyMi4yMzY4NGwtMC4wNTQ1MiwtMzAuNjY3ODZjMCwwIDY2LjUzMDgxLDAuNzA2ODcgNzMuNjE2MDksLTIyLjcxNTZjMC4wMDU3OSwtMC4wMTk0OSAwLjAzMTcyLDMuMjgwNTUgMC4wMzQ0NCwzLjY5OTQ4YzAuMDUzMzYsOC4yMjQyNiAwLjEzNTgsMjcuMzEzNzQgMC4wOTU3MywyNy40NDcxNHoiIHN0cm9rZT0idXJsKCNjb2xvci01KSIvPjxwYXRoIGQ9Ik0zMjEuOTc0MTgsMTI0LjYzNjg5Yy0wLjAzNDIzLDI0LjY5ODMgLTczLjc5MTI0LDI0LjQ1NzMgLTczLjc5MTI0LDI0LjQ1NzNsLTAuMDM3NjgsLTQ4Ljc1MjkxYzAsMCA3My44NTkxOCwyLjQ2MjE4IDczLjgyODkyLDI0LjI5NTYxeiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTYpIi8+PHBhdGggZD0iTTIyMC4wMjIzMSwxNTIuNzIzMDFjMCwwIDAuMDk5NzksLTcuNDI2MTEgLTAuMDk4NTMsLTEwLjUyNjA1Yy0wLjIzOTY5LC0zLjc0NjY5IC0yLjI1MTY5LC03LjkwNzg1IC02LjYyMTg2LC03LjkzNzU1Yy0xMC4wMjM2NywtMC4wNjgxMyAtMTUuNzQyMjUsLTYuNTU1NDUgLTE2LjA1NjE0LC0xNC4wNDg3MmMtMC4zOTc2OCwtOS40OTM3NyA1LjA2MDMyLC0xOC4zNTI0NiAxMy4zNzI1MiwtMTguODY4NzVjNi4zMTE1MSwtMC4zOTIwMiAxMi45NzQ1NywwIDE2LjUyMTA2LDBjNC44NTM1NiwwIDExLjY3ODMzLDYuOTQzNzEgMTEuNjc4MzMsMTIuMTQ2NTJjMCw5LjM1MDc1IDAsMzkuMjM0NTUgMCwzOS4yMzQ1NXoiIHN0cm9rZT0idXJsKCNjb2xvci03KSIvPjxwYXRoIGQ9Ik0yMjAuMzI0NDMsMTIxLjY2MzM4bDguNjczNTYsOC41NzAzdjIxLjQ3NzM4bC0wLjAzNDgsLTIxLjM2Mzk0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTgpIi8+PHBhdGggZD0iTTIxMS45NjA2NCwxMTcuNzkxMjZjMCwtMi40MjM2NSAxLjk2NDc1LC00LjM4ODQxIDQuMzg4NCwtNC4zODg0MWMyLjQyMzY1LDAgNC4zODg0MSwxLjk2NDc2IDQuMzg4NDEsNC4zODg0MWMwLDIuNDIzNjUgLTEuOTY0NzUsNC4zODg0MSAtNC4zODg0MSw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NCwtMS45NjQ3NiAtNC4zODg0LC00LjM4ODQxeiIgc3Ryb2tlPSIjNzJkYWY0Ii8+PHBhdGggZD0iTTE1OC4xODY5OSwxOTEuNTk5MmMwLjAxNTY2LC0wLjE3NzEgLTAuMDUxMzMsLTIwLjc1NzAzIDAsLTIxLjE1NzM3YzEuODEyNDksLTE0LjEzNjA2IDEzLjYwOTE3LC0xNi41OTEwNSAyMi4yNTQ0MiwtMTEuOTEwODJjMC4xMzQ5OCwwLjA3MzA3IDEyLjA2NzU0LDExLjkxMDgyIDEyLjA2NzU0LDExLjkxMDgyaDE3LjcwOTV2MTguNjQ5ODJjMCwwIC0xNy4yNDQ0NiwtMC4wMTYyMiAtMTcuMjQ0NDYsLTAuMDE2MjJjMCwwIC0xMC45NTIyMiwxMS4xNTQxMiAtMTEuMTYyNTUsMTEuMzIzNzljLTEwLjg1MzIsOC43NTUyMyAtMjQuMzQyMDMsLTAuNjg0NzcgLTIzLjYyNDQ1LC04LjgwMDA0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTkpIi8+PHBhdGggZD0iTTE4Mi4zMjIwNywxODAuMDAxODN2LTAuMTU2NzJoMjcuNTgyOTR2MC4xNTY3MnoiIHN0cm9rZT0iIzc1OTNlYSIvPjxwYXRoIGQ9Ik0xNzIuNTM3NDEsMTgwLjI2NDQ3YzAsLTIuNDIzNjUgMS45NjQ3NSwtNC4zODg0MSA0LjM4ODQsLTQuMzg4NDFjMi40MjM2NSwwIDQuMzg4NDEsMS45NjQ3NiA0LjM4ODQxLDQuMzg4NDFjMCwyLjQyMzY1IC0xLjk2NDc1LDQuMzg4NDEgLTQuMzg4NDEsNC4zODg0MWMtMi40MjM2NSwwIC00LjM4ODQsLTEuOTY0NzYgLTQuMzg4NCwtNC4zODg0MXoiIHN0cm9rZT0iIzc1OTNlYSIvPjxwYXRoIGQ9Ik0xOTkuMjA0NDgsMTYxLjgyMjE2bC05LjgxMjc4LC05LjgzNTU3bC0wLjA2MDY2LC05LjQ0MTE1bC0wLjAyODkxLDkuNDYxMDZsOS45MzY4OCw5LjY0ODQ0bDkuODg2OTMsMC4xMzE4MXoiIHN0cm9rZT0idXJsKCNjb2xvci0xMCkiLz48cGF0aCBkPSJNMTg0Ljg1MzAzLDEzNy42NjQzOWMwLC0yLjQyMzY1IDEuOTY0NzUsLTQuMzg4NDEgNC4zODg0MSwtNC4zODg0MWMyLjQyMzY1LDAgNC4zODg0LDEuOTY0NzYgNC4zODg0LDQuMzg4NDFjMCwyLjQyMzY1IC0xLjk2NDc1LDQuMzg4NDEgLTQuMzg4NCw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NDEsLTEuOTY0NzUgLTQuMzg4NDEsLTQuMzg4NDF6IiBzdHJva2U9IiM3MGNhZjIiLz48cGF0aCBkPSJNMjM4LjgwNDE0LDIwNy4wOTIxM2MwLDAgMCwyOS44ODM4IDAsMzkuMjM0NTVjMCw1LjIwMjgxIC02LjgyNDc2LDEyLjE0NjUyIC0xMS42NzgzMiwxMi4xNDY1MmMtMy41NDY0OSwwIC0xMC4yMDk1NSwwLjM5MjAyIC0xNi41MjEwNiwwYy04LjMxMjIxLC0wLjUxNjI5IC0xMy43NzAyLC05LjM3NDk4IC0xMy4zNzI1MiwtMTguODY4NzVjMC4zMTM4OCwtNy40OTMyNyA2LjAzMjQ3LC0xMy45ODA1OSAxNi4wNTYxNCwtMTQuMDQ4NzJjNC4zNzAxNiwtMC4wMjk3IDYuMzgyMTcsLTQuMTkwODYgNi42MjE4NiwtNy45Mzc1NWMwLjE5ODMyLC0zLjA5OTk0IDAuMDk4NTMsLTEwLjUyNjA1IDAuMDk4NTMsLTEwLjUyNjA1eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTExKSIvPjxwYXRoIGQ9Ik0yMjguOTQ5NjQsMjI5LjM4MjQxbDAuMDM0OCwtMjEuMzYzOTR2MjEuNDc3MzhsLTguNjczNTYsOC41NzAzeiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEyKSIvPjxwYXRoIGQ9Ik0yMTYuMzM1NSwyMzcuNTQ5ODdjMi40MjM2NSwwIDQuMzg4NDEsMS45NjQ3NiA0LjM4ODQxLDQuMzg4NGMwLDIuNDIzNjUgLTEuOTY0NzYsNC4zODg0MSAtNC4zODg0MSw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NCwtMS45NjQ3NiAtNC4zODg0LC00LjM4ODQxYzAsLTIuNDIzNjUgMS45NjQ3NSwtNC4zODg0IDQuMzg4NCwtNC4zODg0eiIgc3Ryb2tlPSIjN2M1YmNiIi8+PHBhdGggZD0iTTIwOS4wMjY4LDE5Ny42ODU5NWwtOS44ODY5MywwLjEzMThsLTkuOTM2ODgsOS42NDg0NGwwLjAyODkxLDkuNDYxMDZsMC4wNjA2NSwtOS40NDExNWw5LjgxMjc4LC05LjgzNTU3eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEzKSIvPjxwYXRoIGQ9Ik0xODkuMTQyMjksMjE3LjQxOTkxYzIuNDIzNjUsMCA0LjM4ODQsMS45NjQ3NiA0LjM4ODQsNC4zODg0MWMwLDIuNDIzNjUgLTEuOTY0NzUsNC4zODg0MSAtNC4zODg0LDQuMzg4NDFjLTIuNDIzNjUsMCAtNC4zODg0MSwtMS45NjQ3NiAtNC4zODg0MSwtNC4zODg0MWMwLC0yLjQyMzY1IDEuOTY0NzUsLTQuMzg4NDEgNC4zODg0MSwtNC4zODg0MXoiIHN0cm9rZT0iIzdkNmVkYiIvPjxwYXRoIGQ9Ik0yMTAuMjE1MDEsMjAxLjI4OTA5YzAsLTExLjQ3NjI0IDAsLTM2LjUyNTI3IDAsLTQyLjgwNDk2YzAsLTIuNzk0MzkgMi43NTE0MywtNS42MTY0OSA1LjA1MzYyLC01LjYxNjQ5YzQuOTY3NzYsMCAyMy41MzExNywwIDIzLjUzMTE3LDB2NTQuMjE3ODhjMCwwIC0xOC4xNjMxNywwIC0yMy4xOTMwNiwwYy0yLjQyNTE4LDAgLTUuMzkxNzMsLTIuMjUwMjMgLTUuMzkxNzMsLTUuNzk2NDJ6IiBzdHJva2U9InVybCgjY29sb3ItMTQpIi8+PHBhdGggZD0iTTIyMC4wMDQyNSwxOTMuODg1NjZjMCwtNy41MTYyMSAwLC0yMy45MjE3MyAwLC0yOC4wMzQ1MmMwLC0xLjgzMDE1IDEuODAyMDEsLTMuNjc4NDUgMy4zMDk3OSwtMy42Nzg0NWMzLjI1MzU3LDAgMTUuNDExNDIsMCAxNS40MTE0MiwwdjM1LjUwOTI3YzAsMCAtMTEuODk1NzEsMCAtMTUuMTg5OTgsMGMtMS41ODgzNCwwIC0zLjUzMTIzLC0xLjQ3Mzc2IC0zLjUzMTIzLC0zLjc5NjI5eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTE1KSIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTEuMzY5NTQxNjUwMTI2ODI6MTExLjM2OTU0MTY1MDEyNzA5LS0+
// ==/UserScript==

const LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjIuNzM5MDgiIGhlaWdodD0iMjIyLjczOTA4IiB2aWV3Qm94PSIwLDAsMjIyLjczOTA4LDIyMi43MzkwOCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxODEuOTQ2NzMiIHkxPSIxMTMuNjI1OTIiIHgyPSIxODEuOTQ2NzMiIHkyPSIxNTUuNTUzMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzJkZGY0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmZiZmYyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE4MS45MzMxOSIgeTE9IjIwMy45MTkzOSIgeDI9IjE4MS45MzMxOSIgeTI9IjI0NS44NDY3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3YzdiZTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3YjVhY2IiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQ0LjAxOTYyIiB5MT0iMjE0LjY4ODk1IiB4Mj0iMjQ0LjAxOTYyIiB5Mj0iMjU5Ljc0NjM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdlNjhkNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdhNTNjNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDQuMTU1ODgiIHkxPSIxNzUuMDE0NTUiIHgyPSIyNDQuMTU1ODgiIHkyPSIyMjAuMDcxOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2I5NGYwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2Q2ZGRhIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI0My45MzE4NSIgeTE9IjEzNS41MjAyOCIgeDI9IjI0My45MzE4NSIgeTI9IjE4MC41Nzc2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci01Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZWI3ZWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MTlhZjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQzLjI5OTI4IiB5MT0iMTAwLjEyNjY2IiB4Mj0iMjQzLjI5OTI4IiB5Mj0iMTQ5LjE0NzExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzczZTdmNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZmYmZmMiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTguMDIxNTUiIHkxPSIxMDEuMTY3NzEiIHgyPSIyMTguMDIxNTUiIHkyPSIxNTIuNzIzMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzNlN2Y0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmZiZmYyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyMC4zMjQ0MyIgeTE9IjEzNi42ODcyMiIgeDI9IjIyOC45OTc5OCIgeTI9IjEzNi42ODcyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci04Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3MmQ4ZjMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2ZmJmZjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTg0LjE4ODk5IiB5MT0iMTU2LjM2ODA1IiB4Mj0iMTg0LjE4ODk5IiB5Mj0iMjAzLjkwMzE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYTlmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjN2RlMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxOTkuMjE0MDQiIHkxPSIxNDIuNTQ1NDUiIHgyPSIxOTkuMjE0MDQiIHkyPSIxNjEuODIyMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYzZmMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcwYTdmMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTguMDA4IiB5MT0iMjA3LjA5MjEzIiB4Mj0iMjE4LjAwOCIgeTI9IjI1OC42NDc0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2Q3OWUxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2E1M2M1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyNC42NDc2NiIgeTE9IjIwOC4wMTg0NyIgeDI9IjIyNC42NDc2NiIgeTI9IjIzOC4wNjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2M3OWUwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2M1ZGNkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE5OS4xMTQ4OSIgeTE9IjE5Ny42NTA1NCIgeDI9IjE5OS4xMTQ4OSIgeTI9IjIxNi45MjcyNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2M4MWU1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2M3M2RkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIyNC41MDc0IiB5MT0iMTUyLjg2NzY0IiB4Mj0iMjI0LjUwNzQiIHkyPSIyMDcuMDg1NTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYWNmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjNzllMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMjkuMzY0ODYiIHkxPSIxNjIuMTcyNjkiIHgyPSIyMjkuMzY0ODYiIHkyPSIxOTcuNjgxOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzcwYTZmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdjODBlNSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguNjMwNDYsLTY4LjYzMDQ2KSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTI4LjYzMDQ2LDI5MS4zNjk1NHYtMjIyLjczOTA4aDIyMi43MzkwOHYyMjIuNzM5MDh6IiBmaWxsPSIjMTgxYjIwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMi41Ij48cGF0aCBkPSJNMTY5LjI0MzEsMTU1Ljg5NTc1YzAsMCAtNi40NDYwMSwtMTQuODM4NiA0LjMxMzQyLC0zMC40MjA4NmM5LjE2NDM1LC0xMy4yNzIyIDIzLjQxMTc0LC0xMS43NjYxNSAyMy40MTE3NCwtMTEuNzY2MTVjMCwwIC0xMy44NjY0NSwtMS44MzI0MyAtMjMuMjkxMTksMTEuNzQyMDRjLTExLjczNzksMTYuOTA2MTEgLTQuNDMzOTgsMzAuNDQ0OTcgLTQuNDMzOTgsMzAuNDQ0OTd6IiBzdHJva2U9InVybCgjY29sb3ItMSkiLz48cGF0aCBkPSJNMTY5LjA1ODMzLDIwMy45MTkzOWMwLDAgLTYuMjc0NzksMTQuNDk2MTYgNC40ODQ2NCwzMC4wNzg0MmM5LjE2NDM1LDEzLjI3MjIgMjMuNDExNzQsMTEuNzY2MTUgMjMuNDExNzQsMTEuNzY2MTVjMCwwIC0xMy44NjY0NCwxLjgzMjQ0IC0yMy4yOTExOSwtMTEuNzQyMDRjLTExLjczNzksLTE2LjkwNjExIC00LjYwNTE5LC0zMC4xMDI1NCAtNC42MDUxOSwtMzAuMTAyNTR6IiBzdHJva2U9InVybCgjY29sb3ItMikiLz48cGF0aCBkPSJNMzIyLjAxNjIxLDIzNy4xNDQ2OWMtNi41MDI4OCwyMi43Mjg0NiAtNzMuNjkxNzQsMjIuMjM2ODQgLTczLjY5MTc0LDIyLjIzNjg0bC0wLjA1NDUyLC0zMC42Njc4NmMwLDAgNjYuNTMwODEsMC43MDY4NyA3My42MTYwOSwtMjIuNzE1NmMwLjAwNTc5LC0wLjAxOTQ5IDAuMDg4MTksLTEwLjgwNzk0IDAuMDk5NSwtOS4yMTU5NGMwLjAwMjU0LDAuMzU4NjEgLTAuMDY3NzgsMTIuNDk2NDkgLTAuMDY1MDYsMTIuOTE1NDFjMC4wNTMzNiw4LjIyNDI2IDAuMTM1OCwyNy4zMTM3NCAwLjA5NTczLDI3LjQ0NzE0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTMpIi8+PHBhdGggZD0iTTMyMi4xNTI0NywxOTcuNDcwMjljLTYuNTAyODgsMjIuNzI4NDYgLTczLjY5MTc0LDIyLjIzNjg0IC03My42OTE3NCwyMi4yMzY4NGwtMC4wNTQ1MiwtMzAuNjY3ODZjMCwwIDY2LjUzMDgxLDAuNzA2ODcgNzMuNjE2MDksLTIyLjcxNTYxYzAuMDA1NzksLTAuMDE5NDkgMC4wODgxOSwtMTAuODA3OTQgMC4wOTk0OSwtOS4yMTU5NGMwLjAwMjU0LDAuMzU4NjEgLTAuMDY3NzcsMTIuNDk2NDkgLTAuMDY1MDUsMTIuOTE1NDFjMC4wNTMzNiw4LjIyNDI2IDAuMTM1OCwyNy4zMTM3NSAwLjA5NTczLDI3LjQ0NzE0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTQpIi8+PHBhdGggZD0iTTMyMS45Mjg0NCwxNTcuOTc2MDNjLTYuNTAyODgsMjIuNzI4NDYgLTczLjY5MTc0LDIyLjIzNjg0IC03My42OTE3NCwyMi4yMzY4NGwtMC4wNTQ1MiwtMzAuNjY3ODZjMCwwIDY2LjUzMDgxLDAuNzA2ODcgNzMuNjE2MDksLTIyLjcxNTZjMC4wMDU3OSwtMC4wMTk0OSAwLjAzMTcyLDMuMjgwNTUgMC4wMzQ0NCwzLjY5OTQ4YzAuMDUzMzYsOC4yMjQyNiAwLjEzNTgsMjcuMzEzNzQgMC4wOTU3MywyNy40NDcxNHoiIHN0cm9rZT0idXJsKCNjb2xvci01KSIvPjxwYXRoIGQ9Ik0zMjEuOTc0MTgsMTI0LjYzNjg5Yy0wLjAzNDIzLDI0LjY5ODMgLTczLjc5MTI0LDI0LjQ1NzMgLTczLjc5MTI0LDI0LjQ1NzNsLTAuMDM3NjgsLTQ4Ljc1MjkxYzAsMCA3My44NTkxOCwyLjQ2MjE4IDczLjgyODkyLDI0LjI5NTYxeiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTYpIi8+PHBhdGggZD0iTTIyMC4wMjIzMSwxNTIuNzIzMDFjMCwwIDAuMDk5NzksLTcuNDI2MTEgLTAuMDk4NTMsLTEwLjUyNjA1Yy0wLjIzOTY5LC0zLjc0NjY5IC0yLjI1MTY5LC03LjkwNzg1IC02LjYyMTg2LC03LjkzNzU1Yy0xMC4wMjM2NywtMC4wNjgxMyAtMTUuNzQyMjUsLTYuNTU1NDUgLTE2LjA1NjE0LC0xNC4wNDg3MmMtMC4zOTc2OCwtOS40OTM3NyA1LjA2MDMyLC0xOC4zNTI0NiAxMy4zNzI1MiwtMTguODY4NzVjNi4zMTE1MSwtMC4zOTIwMiAxMi45NzQ1NywwIDE2LjUyMTA2LDBjNC44NTM1NiwwIDExLjY3ODMzLDYuOTQzNzEgMTEuNjc4MzMsMTIuMTQ2NTJjMCw5LjM1MDc1IDAsMzkuMjM0NTUgMCwzOS4yMzQ1NXoiIHN0cm9rZT0idXJsKCNjb2xvci03KSIvPjxwYXRoIGQ9Ik0yMjAuMzI0NDMsMTIxLjY2MzM4bDguNjczNTYsOC41NzAzdjIxLjQ3NzM4bC0wLjAzNDgsLTIxLjM2Mzk0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTgpIi8+PHBhdGggZD0iTTIxMS45NjA2NCwxMTcuNzkxMjZjMCwtMi40MjM2NSAxLjk2NDc1LC00LjM4ODQxIDQuMzg4NCwtNC4zODg0MWMyLjQyMzY1LDAgNC4zODg0MSwxLjk2NDc2IDQuMzg4NDEsNC4zODg0MWMwLDIuNDIzNjUgLTEuOTY0NzUsNC4zODg0MSAtNC4zODg0MSw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NCwtMS45NjQ3NiAtNC4zODg0LC00LjM4ODQxeiIgc3Ryb2tlPSIjNzJkYWY0Ii8+PHBhdGggZD0iTTE1OC4xODY5OSwxOTEuNTk5MmMwLjAxNTY2LC0wLjE3NzEgLTAuMDUxMzMsLTIwLjc1NzAzIDAsLTIxLjE1NzM3YzEuODEyNDksLTE0LjEzNjA2IDEzLjYwOTE3LC0xNi41OTEwNSAyMi4yNTQ0MiwtMTEuOTEwODJjMC4xMzQ5OCwwLjA3MzA3IDEyLjA2NzU0LDExLjkxMDgyIDEyLjA2NzU0LDExLjkxMDgyaDE3LjcwOTV2MTguNjQ5ODJjMCwwIC0xNy4yNDQ0NiwtMC4wMTYyMiAtMTcuMjQ0NDYsLTAuMDE2MjJjMCwwIC0xMC45NTIyMiwxMS4xNTQxMiAtMTEuMTYyNTUsMTEuMzIzNzljLTEwLjg1MzIsOC43NTUyMyAtMjQuMzQyMDMsLTAuNjg0NzcgLTIzLjYyNDQ1LC04LjgwMDA0eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTkpIi8+PHBhdGggZD0iTTE4Mi4zMjIwNywxODAuMDAxODN2LTAuMTU2NzJoMjcuNTgyOTR2MC4xNTY3MnoiIHN0cm9rZT0iIzc1OTNlYSIvPjxwYXRoIGQ9Ik0xNzIuNTM3NDEsMTgwLjI2NDQ3YzAsLTIuNDIzNjUgMS45NjQ3NSwtNC4zODg0MSA0LjM4ODQsLTQuMzg4NDFjMi40MjM2NSwwIDQuMzg4NDEsMS45NjQ3NiA0LjM4ODQxLDQuMzg4NDFjMCwyLjQyMzY1IC0xLjk2NDc1LDQuMzg4NDEgLTQuMzg4NDEsNC4zODg0MWMtMi40MjM2NSwwIC00LjM4ODQsLTEuOTY0NzYgLTQuMzg4NCwtNC4zODg0MXoiIHN0cm9rZT0iIzc1OTNlYSIvPjxwYXRoIGQ9Ik0xOTkuMjA0NDgsMTYxLjgyMjE2bC05LjgxMjc4LC05LjgzNTU3bC0wLjA2MDY2LC05LjQ0MTE1bC0wLjAyODkxLDkuNDYxMDZsOS45MzY4OCw5LjY0ODQ0bDkuODg2OTMsMC4xMzE4MXoiIHN0cm9rZT0idXJsKCNjb2xvci0xMCkiLz48cGF0aCBkPSJNMTg0Ljg1MzAzLDEzNy42NjQzOWMwLC0yLjQyMzY1IDEuOTY0NzUsLTQuMzg4NDEgNC4zODg0MSwtNC4zODg0MWMyLjQyMzY1LDAgNC4zODg0LDEuOTY0NzYgNC4zODg0LDQuMzg4NDFjMCwyLjQyMzY1IC0xLjk2NDc1LDQuMzg4NDEgLTQuMzg4NCw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NDEsLTEuOTY0NzUgLTQuMzg4NDEsLTQuMzg4NDF6IiBzdHJva2U9IiM3MGNhZjIiLz48cGF0aCBkPSJNMjM4LjgwNDE0LDIwNy4wOTIxM2MwLDAgMCwyOS44ODM4IDAsMzkuMjM0NTVjMCw1LjIwMjgxIC02LjgyNDc2LDEyLjE0NjUyIC0xMS42NzgzMiwxMi4xNDY1MmMtMy41NDY0OSwwIC0xMC4yMDk1NSwwLjM5MjAyIC0xNi41MjEwNiwwYy04LjMxMjIxLC0wLjUxNjI5IC0xMy43NzAyLC05LjM3NDk4IC0xMy4zNzI1MiwtMTguODY4NzVjMC4zMTM4OCwtNy40OTMyNyA2LjAzMjQ3LC0xMy45ODA1OSAxNi4wNTYxNCwtMTQuMDQ4NzJjNC4zNzAxNiwtMC4wMjk3IDYuMzgyMTcsLTQuMTkwODYgNi42MjE4NiwtNy45Mzc1NWMwLjE5ODMyLC0zLjA5OTk0IDAuMDk4NTMsLTEwLjUyNjA1IDAuMDk4NTMsLTEwLjUyNjA1eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTExKSIvPjxwYXRoIGQ9Ik0yMjguOTQ5NjQsMjI5LjM4MjQxbDAuMDM0OCwtMjEuMzYzOTR2MjEuNDc3MzhsLTguNjczNTYsOC41NzAzeiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEyKSIvPjxwYXRoIGQ9Ik0yMTYuMzM1NSwyMzcuNTQ5ODdjMi40MjM2NSwwIDQuMzg4NDEsMS45NjQ3NiA0LjM4ODQxLDQuMzg4NGMwLDIuNDIzNjUgLTEuOTY0NzYsNC4zODg0MSAtNC4zODg0MSw0LjM4ODQxYy0yLjQyMzY1LDAgLTQuMzg4NCwtMS45NjQ3NiAtNC4zODg0LC00LjM4ODQxYzAsLTIuNDIzNjUgMS45NjQ3NSwtNC4zODg0IDQuMzg4NCwtNC4zODg0eiIgc3Ryb2tlPSIjN2M1YmNiIi8+PHBhdGggZD0iTTIwOS4wMjY4LDE5Ny42ODU5NWwtOS44ODY5MywwLjEzMThsLTkuOTM2ODgsOS42NDg0NGwwLjAyODkxLDkuNDYxMDZsMC4wNjA2NSwtOS40NDExNWw5LjgxMjc4LC05LjgzNTU3eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEzKSIvPjxwYXRoIGQ9Ik0xODkuMTQyMjksMjE3LjQxOTkxYzIuNDIzNjUsMCA0LjM4ODQsMS45NjQ3NiA0LjM4ODQsNC4zODg0MWMwLDIuNDIzNjUgLTEuOTY0NzUsNC4zODg0MSAtNC4zODg0LDQuMzg4NDFjLTIuNDIzNjUsMCAtNC4zODg0MSwtMS45NjQ3NiAtNC4zODg0MSwtNC4zODg0MWMwLC0yLjQyMzY1IDEuOTY0NzUsLTQuMzg4NDEgNC4zODg0MSwtNC4zODg0MXoiIHN0cm9rZT0iIzdkNmVkYiIvPjxwYXRoIGQ9Ik0yMTAuMjE1MDEsMjAxLjI4OTA5YzAsLTExLjQ3NjI0IDAsLTM2LjUyNTI3IDAsLTQyLjgwNDk2YzAsLTIuNzk0MzkgMi43NTE0MywtNS42MTY0OSA1LjA1MzYyLC01LjYxNjQ5YzQuOTY3NzYsMCAyMy41MzExNywwIDIzLjUzMTE3LDB2NTQuMjE3ODhjMCwwIC0xOC4xNjMxNywwIC0yMy4xOTMwNiwwYy0yLjQyNTE4LDAgLTUuMzkxNzMsLTIuMjUwMjMgLTUuMzkxNzMsLTUuNzk2NDJ6IiBzdHJva2U9InVybCgjY29sb3ItMTQpIi8+PHBhdGggZD0iTTIyMC4wMDQyNSwxOTMuODg1NjZjMCwtNy41MTYyMSAwLC0yMy45MjE3MyAwLC0yOC4wMzQ1MmMwLC0xLjgzMDE1IDEuODAyMDEsLTMuNjc4NDUgMy4zMDk3OSwtMy42Nzg0NWMzLjI1MzU3LDAgMTUuNDExNDIsMCAxNS40MTE0MiwwdjM1LjUwOTI3YzAsMCAtMTEuODk1NzEsMCAtMTUuMTg5OTgsMGMtMS41ODgzNCwwIC0zLjUzMTIzLC0xLjQ3Mzc2IC0zLjUzMTIzLC0zLjc5NjI5eiIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTE1KSIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTEuMzY5NTQxNjUwMTI2ODI6MTExLjM2OTU0MTY1MDEyNzA5LS0+";

(function() {
    'use strict';

    // --- CONFIGURATION DES SITES ---
    const CONFIG = {
        'chatgpt.com': {
            name: 'ChatGPT',
            // Le sélecteur qui a fonctionné lors de ton test :
            rowSelector: '[data-message-author-role]',
            // Comment savoir qui parle :
            roleGetter: (el) => el.getAttribute('data-message-author-role'), // Retourne 'user' ou 'assistant'
            // Où est le texte (Essaie .markdown, sinon prend tout le texte)
            contentGetter: (el) => {
                const markdown = el.querySelector('.markdown');
                return markdown ? markdown.innerText : el.innerText;
            }
        },
        'claude.ai': {
            name: 'Claude',
            rowSelector: '.font-user-message, .font-claude-message',
            roleGetter: (el) => el.classList.contains('font-user-message') ? 'user' : 'assistant',
            contentGetter: (el) => el.innerText
        },
        'gemini.google.com': {
            name: 'Gemini',
            // Gemini est complexe (Shadow DOM). Tentative générique sur les conteneurs de texte.
            rowSelector: '.user-query, .model-response',
            roleGetter: (el) => el.classList.contains('user-query') ? 'user' : 'assistant',
            contentGetter: (el) => el.innerText
        }
    };

    const DB_KEY = 'ai_collector_v2_storage';

    // --- 2. FONCTIONS DE STOCKAGE ---

    function getStorage() {
        return GM_getValue(DB_KEY, []);
    }

    function saveMessage(role, content, source) {
        if (!content || content.trim().length < 2) return; // Pas de messages vides
        if (content.includes("Stop generating")) return; // Évite les boutons d'interface capturés

        let db = getStorage();

        // Création d'une signature unique pour éviter les doublons
        // On utilise : Role + les 30 premiers caractères + les 30 derniers
        const signature = `${role}::${content.substring(0, 30)}::${content.slice(-30)}`;

        // Vérifie si déjà présent
        const exists = db.some(msg => msg.signature === signature);

        if (!exists) {
            db.push({
                role: role,
                content: content.trim(),
                source: source,
                timestamp: new Date().toISOString(),
                signature: signature
            });
            GM_setValue(DB_KEY, db);
            updateUICount(db.length, true); // True = fait clignoter le compteur
            console.log(`[AI Collector] Nouveau message capturé (${role})`);
        }
    }

    function clearStorage() {
        if (confirm('Vider tout le dataset capturé ?')) {
            GM_setValue(DB_KEY, []);
            updateUI(0);
        }
    }

    // --- 3. MOTEUR DE SCRAPING ---

    function getSiteConfig() {
        const host = window.location.hostname;
        if (host.includes('chatgpt')) return CONFIG['chatgpt.com'];
        if (host.includes('claude')) return CONFIG['claude.ai'];
        if (host.includes('gemini')) return CONFIG['gemini.google.com'];
        return null;
    }

    function scrape() {
        const config = getSiteConfig();
        if (!config) return;

        const rows = document.querySelectorAll(config.rowSelector);

        // Si 0 lignes trouvées, on ne fait rien (évite les erreurs)
        if (rows.length === 0) return;

        rows.forEach(row => {
            try {
                let role = config.roleGetter(row);
                let content = config.contentGetter(row);

                // Normalisation des rôles pour OpenAI JSONL
                if (role === 'human' || role === 'user') role = 'user';
                if (role === 'model' || role === 'assistant' || role === 'claude') role = 'assistant';

                saveMessage(role, content, config.name);
            } catch (e) {
                // Ignore les erreurs de parsing sur un élément spécifique
            }
        });
    }

    // --- 4. EXPORT JSONL ---

    function generateJSONL() {
        const data = getStorage();
        let jsonl = "";

        // Format simple : chaque ligne est un objet {messages: [...]}
        // Note : Pour un vrai dataset conversationnel, il faudrait grouper par session.
        // Ici on fait du "ligne par ligne" simple.
        data.forEach(item => {
            const entry = {
                messages: [
                    { role: "user", content: "..." }, // Placeholder contextuel si besoin
                    { role: item.role, content: item.content }
                ],
                source: item.source
            };
            // Simplification : on exporte juste l'objet brut pour inspection ou usage direct
            const simplified = { role: item.role, content: item.content };
            jsonl += JSON.stringify(simplified) + "\n";
        });
        return jsonl;
    }

    function downloadData() {
        const data = getStorage();
        if (data.length === 0) { alert("Rien à télécharger !"); return; }

        const jsonlContent = generateJSONL();
        const blob = new Blob([jsonlContent], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `dataset_${new Date().toISOString().slice(0,10)}.jsonl`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function copyToClipboard() {
        const data = getStorage();
        if (data.length === 0) return;
        GM_setClipboard(generateJSONL());
        alert(`${data.length} messages copiés dans le presse-papier !`);
    }

    // --- 5. INTERFACE UTILISATEUR (UI) ---
    function createUI() {
        // On s'assure que l'ancien panel est supprimé si on recharge le script
        const existing = document.getElementById('ai-collector-panel');
        if (existing) existing.remove();

        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

            /* --- Conteneur Principal (La Bulle) --- */
            #ai-collector-panel {
                position: fixed;
                bottom: 25px;
                right: 25px;
                width: 50px;  /* Taille Bulle */
                height: 50px; /* Taille Bulle */
                background: rgba(20, 20, 20, 0.85);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 50%; /* Cercle parfait au début */
                z-index: 10000;
                font-family: 'Inter', sans-serif;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Effet ressort */
                overflow: hidden;
                cursor: pointer;
            }

            /* --- État Survolé (Le Menu) --- */
            #ai-collector-panel:hover {
                width: 180px;      /* Largeur menu ouvert */
                height: auto;
                min-height: 190px; /* Hauteur min pour les boutons */
                border-radius: 16px; /* Rectangle arrondi */
                background: rgba(20, 20, 20, 0.98);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
            }

            /* --- Header & Logo --- */
            .ai-header {
                display: flex;
                align-items: center;
                padding: 10px;
                position: relative;
                height: 50px; /* Garde la hauteur de la bulle pour l'alignement */
                box-sizing: border-box;
            }

            .ai-logo {
                width: 30px;
                height: 30px;
                border-radius: 6px;
                object-fit: cover;
                flex-shrink: 0;
                transition: transform 0.3s;
                /* Centrage parfait en mode bulle */
                position: absolute;
                left: 10px;
                top: 10px;
            }

            #ai-collector-panel:hover .ai-logo {
                transform: scale(1);
            }

            /* Titre (Masqué en mode bulle) */
            .ai-title-text {
                margin-left: 40px; /* Espace pour le logo */
                font-size: 13px;
                font-weight: 600;
                color: #fff;
                white-space: nowrap;
                opacity: 0; /* Invisible au début */
                transform: translateX(10px);
                transition: all 0.2s ease;
            }

            #ai-collector-panel:hover .ai-title-text {
                opacity: 1;
                transform: translateX(0);
                transition-delay: 0.1s;
            }

            /* --- Compteur (Style Badge Notification) --- */
            #ai-count {
                position: absolute;
                top: 0px;
                right: 0px;
                background: #10a37f;
                color: white;
                font-size: 10px;
                font-weight: bold;
                height: 18px;
                min-width: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 2px solid #222; /* Contour pour détacher du fond */
                z-index: 2;
                transition: all 0.3s;
            }

            /* Quand ouvert, on déplace le compteur un peu plus proprement */
            #ai-collector-panel:hover #ai-count {
                top: 15px;
                right: 15px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                border-radius: 6px;
                padding: 2px 6px;
                height: auto;
                width: auto;
            }

            /* --- Actions (Boutons) --- */
            .ai-actions {
                display: flex;
                flex-direction: column;
                gap: 6px;
                padding: 0 12px 12px 12px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all 0.2s ease;
            }

            #ai-collector-panel:hover .ai-actions {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
                transition-delay: 0.15s;
            }

            .ai-btn {
                background: rgba(255, 255, 255, 0.05);
                border: none;
                color: #ccc;
                padding: 8px;
                border-radius: 6px;
                font-size: 12px;
                cursor: pointer;
                text-align: left;
                display: flex; align-items: center; gap: 8px;
                transition: background 0.2s;
            }

            .ai-btn:hover { background: rgba(255, 255, 255, 0.15); color: white; }
            .btn-green { color: #10a37f; }
            .btn-red { color: #ef4444; }
        `;
        document.head.appendChild(style);

        const div = document.createElement('div');
        div.id = 'ai-collector-panel';

        // L'image du logo doit être définie dans LOGO_BASE64
        // Si tu l'as perdue, remets la longue chaîne Base64 du script précédent
        // Sinon, mets une URL placeholder pour tester : "https://via.placeholder.com/30"

        div.innerHTML = `
            <div class="ai-header">
                <img src="${typeof LOGO_BASE64 !== 'undefined' ? LOGO_BASE64 : ''}" class="ai-logo">
                <span class="ai-title-text">AI COLLECTOR</span>
                <div id="ai-count">0</div>
            </div>
            <div class="ai-actions">
                <button id="btn-dl" class="ai-btn btn-green">📥 Télécharger</button>
                <button id="btn-copy" class="ai-btn">📋 Copier</button>
                <button id="btn-clear" class="ai-btn btn-red">🗑️ Vider</button>
            </div>
        `;

        document.body.appendChild(div);

        // Attachement des événements
        document.getElementById('btn-dl').onclick = (e) => { e.stopPropagation(); downloadData(); };
        document.getElementById('btn-copy').onclick = (e) => { e.stopPropagation(); copyToClipboard(); };
        document.getElementById('btn-clear').onclick = (e) => { e.stopPropagation(); clearStorage(); };

        // Mise à jour initiale du compteur
        if (typeof getStorage === 'function') {
            updateUI(getStorage().length);
        }
    }

    // Fonction utilitaire pour l'animation du compteur (inchangée)
    function updateUICount(count) {
        const el = document.getElementById('ai-count');
        if (el) {
            el.innerText = count;
            el.classList.remove('pop-anim');
            void el.offsetWidth;
            el.classList.add('pop-anim');
        }
    }

      function updateUI(count, flash = false) {
          const counter = document.getElementById('ai-count');
          if (counter) {
              counter.innerText = count;
              if (flash) {
                  counter.style.background = '#10a37f'; // Flash vert
                  setTimeout(() => counter.style.background = '#333', 500);
              }
          }
      }

    // --- 6. DEMARRAGE ET BOUCLE ---

    let scrapeTimeout;
    const observer = new MutationObserver(() => {
        // Debounce : on attend que la page arrête de bouger pendant 2 secondes avant de scraper
        // Cela évite de scraper pendant que l'IA est en train d'écrire mot par mot
        clearTimeout(scrapeTimeout);
        scrapeTimeout = setTimeout(scrape, 2000);
    });

    function init() {
        console.log("AI Collector V2 Started");
        createUI();
        scrape(); // Premier scrape immédiat
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Petit délai de sécurité au chargement de la page
    setTimeout(init, 1500);

})();