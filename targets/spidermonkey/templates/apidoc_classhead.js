#set generator = $current_class.generator

#if $generator.target_ns
${generator.target_ns}.${current_class.class_name} = {
#else
${current_class.class_name} = {
#end if
