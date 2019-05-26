#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef pair<int, int> pii;
typedef pair<ll, int> pli;

typedef vector<vector<int>> Board;
typedef vector<int> Path;

const string board_str =
    "----------------\n"
    "| 04 | 03 | 01 |\n"
    "| 00 | 05 | 02 |\n"
    "| 06 | 07 | 08 |\n"
    "----------------\n";
const int H = 3;
const int W = 3;

Board read_board(istream &is) {
    string s;
    Board board = Board(3, vector<int>(3));

    is >> s;
    for (int y = 0; y < H; y++) {
        for (int x = 0; x < W; x++) {
            is >> s >> board[y][x];
        }
        is >> s;
    }
    is >> s;

    return board;
}

void print_board(Board &board) {
    cerr << "----------------" << endl;
    for (int i = 0; i < H; i++) {
        cerr << "|";
        for (int j = 0; j < W; j++) {
            cerr << " ";
            cerr << setfill('0') << setw(2) << board[i][j];
            cerr << setfill(' ') << setw(0) << " |";
        }
        cerr << endl;
    }
    cerr << "----------------" << endl;
}

istringstream expected_iss(
    "----------------\n"
    "| 00 | 01 | 02 |\n"
    "| 03 | 04 | 05 |\n"
    "| 06 | 07 | 08 |\n"
    "----------------\n");
const Board expected = read_board(expected_iss);

int dx[4] = {0, 1, 0, -1};
int dy[4] = {-1, 0, 1, 0};

pii zero_loc(Board &board) {
    for (int y = 0; y < H; y++) {
        for (int x = 0; x < W; x++) {
            if (board[y][x] == 0) {
                return {x, y};
            }
        }
    }
    return {-1, -1};
}

Path solve(Board &board) {
    set<Board> visited;
    queue<pair<Board, Path>> q;

    q.push({board, {}});

    while (!q.empty()) {
        auto bp = q.front();
        q.pop();
        Board b = bp.first;
        Path p = bp.second;

        if (b == expected) {
            return p;
        }
        if (visited.count(b) > 0) {
            continue;
        }
        visited.insert(b);

        pii z = zero_loc(b);
        int zx = z.first, zy = z.second;
        for (int k = 0; k < 4; k++) {
            int x = zx + dx[k], y = zy + dy[k];
            if (!(0 <= x && x < W && 0 <= y && y < H)) {
                continue;
            }
            Board new_b = b;
            Path new_p = p;
            swap(new_b[y][x], new_b[zy][zx]);
            new_p.push_back(k);
            q.push({new_b, new_p});
        }
    }

    return {-1};
}

int main() {
    Board board = read_board(cin);

    Path ans = solve(board);

    int len = ans.size();
    for (int i = 0; i < len; i++) {
        cout << ans[i] << (i == len - 1 ? "" : ",");
    }
    cout << endl;

    return 0;
}
