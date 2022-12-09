#!/bin/bash

cd /home/quentin/api-prixpiece
python3 -m uvicorn --host 127.0.0.1 main:app
