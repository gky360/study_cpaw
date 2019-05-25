require 'socket'


if ARGV.size >= 2 then
  $sockin = TCPSocket.open(ARGV[0], ARGV[1])
  $sockout = $sockin
  $interactive = false
else
  $sockin = STDIN
  $sockout = STDOUT
  $interactive = true
end

def print_if_interactive(str)
  if $interactive then
    print(str)
  end
end

def print_if_not_interactive(str)
  if !$interactive then
    print(str)
  end
end

print_if_interactive("Interactive mode\n")

while true
  response = ""
  6.times do
    sin = $sockin.gets
    if sin == nil
      break
    end
    response += sin.to_s
  end
  print_if_not_interactive(response)

  answer = IO.popen("./solve.out", "r+") { |io|
    io.puts response.to_s
    io.close_write
    io.gets
  }

  puts answer

  $sockout.write(answer.to_s + "\n")
end

$sockin.close
