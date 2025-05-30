#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-1790-ca578dee/tic_tac_toe_classic
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

